const { Harmony } = require('@harmony-js/core');
const { ChainID, ChainType } = require('@harmony-js/utils');

const hmy = new Harmony(process.env.TESTNET_0_URL, {
  chainId: ChainID.HmyTestnet,
  chainType: ChainType.Harmony
});

const contractAddr = '0x05d511aafc16c7c12e60a2ec4dbaf267ea72d420';
const contractJson = require('../../client/src/contracts/AggregatorV3Interface.json');
const contract = hmy.contracts.createContract(contractJson.abi, contractAddr);

let options = { gasPrice: 1000000000, gasLimit: 6721900 };

contract.methods
  .latestRoundData()
  .call(options)
  .then(answer => {
    let num = parseInt(answer.toString()) / 10 ** 8;
    console.log('price: ' + num);
  });
