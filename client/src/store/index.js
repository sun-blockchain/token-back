import Vue from 'vue';
import Vuex from 'vuex';
import { Harmony } from '@harmony-js/core';
import { ChainID, ChainType, fromWei, hexToNumber, Units } from '@harmony-js/utils';
import Market from '@/contracts/Market.json';
const GAS_LIMIT = 6721900;
const GAS_PRICE = 1000000000;
const options = {
  gasPrice: GAS_PRICE,
  gasLimit: GAS_LIMIT
};
const hmy = new Harmony('https://api.s0.b.hmny.io', {
  chainID: ChainID.HmyTestnet,
  chainType: ChainType.Harmony
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mathWallet: null,
    account: null,
    withdrawableStake: 0,
    market: null,
    sellingItems: []
  },
  mutations: {
    setMathWallet(state, payload) {
      state.mathWallet = payload.mathWallet;
    },
    setAccount(state, payload) {
      state.account = payload.account;
      state.stakeBalance = payload.balance;
      state.withdrawableStake = payload.withdrawable;
    },
    setMarket(state, payload) {
      state.market = payload.market;
    },
    setSellingItems(state, payload) {
      state.sellingItems = payload.sellingItems;
    }
  },
  actions: {
    loadWallet({ commit }) {
      let mathWallet = window.harmony;
      const session = localStorage.getItem('harmony_session');
      const sessionObj = JSON.parse(session);
      if (sessionObj && sessionObj.account) {
        commit('setMathWallet', { mathWallet });
        commit('setAccount', { account });
      }
    },

    syncLocalStorage({ commit }, { account, sessionType }) {
      console.log('sync', account, sessionType);
      localStorage.setItem(
        'harmony_session',
        JSON.stringify({
          account: account,
          sessionType: sessionType
        })
      );
    },

    signInWallet({ dispatch, commit, state }) {
      let isMathWallet = window.harmony && window.harmony.isMathWallet;
      if (isMathWallet) {
        let mathWallet = window.harmony;
        mathWallet.getAccount().then(async account => {
          commit('setMathWallet', { mathWallet });

          let market = state.market;
          let withdrawable = 0;
          if (market) {
            let address = hmy.crypto.getAddress(account.address).checksum;
            withdrawable = await market.methods.getWithdrawableStake(address).call(options);
          }

          commit('setAccount', { account, withdrawable });
          dispatch('syncLocalStorage', { account: account, sessionType: 'mathWallet' });
        });
      }
    },

    signOutWallet({ dispatch, commit }) {
      let isMathWallet = window.harmony && window.harmony.isMathWallet;
      if (isMathWallet) {
        let mathwallet = window.harmony;
        mathwallet.forgetIdentity().then(() => {
          commit('setAccount', { account: null });
          dispatch('syncLocalStorage', { account: null, mathWallet: null });
        });
      }
    },

    async initMarket({ commit }) {
      let marketAddress = Market.networks[2].address;
      if (marketAddress) {
        let market = hmy.contracts.createContract(Market.abi, marketAddress);
        commit('setMarket', { market });
      } else {
        console.error('Market contract not found');
      }
    },

    async fetchSellingItems({ commit, state }) {
      let market = state.market;
      if (market) {
        let sellingItemIds = await market.methods.getSellingItems().call(options);
        let sellingItems = [];
        if (sellingItemIds) {
          sellingItems = await Promise.all(
            sellingItemIds.map(async id => {
              let itemInfo = await market.methods.getItemById(id).call(options);
              let item = {
                id: id.toNumber(),
                price: itemInfo.price,
                imageUrl: itemInfo.imageUrl,
                itemType: itemInfo.itemType
              };
              return item;
            })
          );
        }
        commit('setSellingItems', { sellingItems });
      }
    }
  },
  modules: {}
});
