const { Harmony } = require('@harmony-js/core');
const { ChainID, ChainType } = require('@harmony-js/utils');
const GAS_LIMIT = 6721900;
const GAS_PRICE = 1000000000;

const options = {
  gasLimit: GAS_LIMIT,
  gasPrice: GAS_PRICE
};

const hmy = new Harmony(process.env.TESTNET_0_URL, {
  chainID: ChainID.HmyTestnet,
  chainType: ChainType.Harmony
});

const pointJson = require('../../client/src/contracts/Point.json');
const marketJson = require('../../client/src/contracts/Market.json');

const pointAddress = pointJson.networks['2'].address;
const marketAddress = marketJson.networks['2'].address;

const rate = 86;

module.exports = async () => {
  try {
    // Setup for Market
    const market = hmy.contracts.createContract(marketJson.abi, marketAddress);
    market.wallet.addByPrivateKey(process.env.TESTNET_PRIVATE_KEY);

    const txnSetup = hmy.transactions.newTx({
      to: marketAddress
    });

    await market.wallet.signTransaction(txnSetup);

    // Setup Point Contract Address
    await market.methods
      .setPointContract(pointAddress)
      .send(options)
      .then(result => {
        // console.log(result);
        console.log('Setup point contract successfully!');
      })
      .catch(error => {
        console.log('Setup point contract error', error);
      });

    await market.methods
      .setRate(rate)
      .send(options)
      .then(result => {
        // console.log(result);
        console.log('Setup rate successfully!');
      })
      .catch(error => {
        console.log('Setup rate error', error);
      });

    // Add Market Contract Address to Point'miters array
    const point = hmy.contracts.createContract(pointJson.abi, pointAddress);
    point.wallet.addByPrivateKey(process.env.TESTNET_PRIVATE_KEY);

    const txnSetupMinter = hmy.transactions.newTx({
      to: pointAddress
    });

    await point.wallet.signTransaction(txnSetupMinter);
    await point.methods
      .addMinter(marketAddress)
      .send(options)
      .then(result => {
        // console.log(result);
        console.log('Setup minter successfully!');
      })
      .catch(error => {
        console.log('Setup minter error', error);
      });

    const txnPause = hmy.transactions.newTx({
      to: pointAddress
    });

    await point.wallet.signTransaction(txnPause);
    await point.methods
      .pause()
      .send(options)
      .then(result => {
        // console.log(result);
        console.log('Pause successfully!');
      })
      .catch(error => {
        console.log('Pause error', error);
      });

    console.log('ALL SETUP SUCCESSFULLY!');
    process.exit();
  } catch (error) {
    console.log('SETUP FAILED!: ', error);
    process.exit();
  }
};
