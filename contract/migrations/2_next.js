const Point = artifacts.require('Point');

module.exports = function (deployer) {
  deployer.deploy(Point, 'SUN');
};
