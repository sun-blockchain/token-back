const { Harmony } = require('@harmony-js/core');
const { ChainID, ChainType } = require('@harmony-js/utils');

const GAS_LIMIT = 6721900;
const GAS_PRICE = 1000000000;
require('dotenv').config();

const options = {
  gasLimit: GAS_LIMIT,
  gasPrice: GAS_PRICE
};

const hmy = new Harmony('https://api.s0.b.hmny.io', {
  chainID: ChainID.HmyTestnet,
  chainType: ChainType.Harmony
});

exports.getBalance = async function(oneAddress) {
  try {
    let data = await hmy.blockchain.getBalance({
      address: oneAddress
    });
    return parseInt(data.result);
  } catch (error) {
    console.log(error);
    return error;
  }
};

// this.getBalance('one12j4ycvnta3l68ep28lpe73n20wx470yfzq9uf3');
