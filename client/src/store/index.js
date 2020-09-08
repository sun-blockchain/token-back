import Vue from 'vue';
import Vuex from 'vuex';
import { Harmony } from '@harmony-js/core';
import { ChainID, ChainType, fromWei, hexToNumber, Units } from '@harmony-js/utils';

const GAS_LIMIT = 6721900;
const GAS_PRICE = 1000000000;
const options = {
  gasPrice: GAS_PRICE,
  gasLimit: GAS_LIMIT
};
const hmy = new Harmony('https://api.s0.t.hmny.io', {
  chainType: ChainType.Harmony,
  chainId: ChainID.HmyTestnet
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mathWallet: null,
    account: null
  },
  mutations: {
    setMathWallet(state, payload) {
      state.mathWallet = payload.mathWallet;
    },
    setAccount(state, payload) {
      state.account = payload.account;
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

    signInWallet({ dispatch, commit }) {
      let isMathWallet = window.harmony && window.harmony.isMathWallet;
      if (isMathWallet) {
        let mathWallet = window.harmony;
        mathWallet.getAccount().then((account) => {
          commit('setMathWallet', { mathWallet });
          commit('setAccount', { account });
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
    }
  },
  modules: {}
});
