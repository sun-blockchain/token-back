const Market = artifacts.require('Market');
const Point = artifacts.require('Point');

module.exports = async function (deployer) {
  try {
    await deployer.deploy(Point, 'SUN');
    await deployer.deploy(Market, '0x05d511aafc16c7c12e60a2ec4dbaf267ea72d420');
  } catch (error) {
    console.log(error);
  }
  return;
};
