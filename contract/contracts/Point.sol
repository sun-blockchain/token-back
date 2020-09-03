pragma solidity ^0.5.0;

import "@openzeppelin/contracts/token/ERC20/ERC20Mintable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Pausable.sol";

/**
 * @title Point
 **/

contract Point is ERC20Mintable, ERC20Burnable, ERC20Detailed {
    constructor(string memory _symbol)
        public
        ERC20Detailed(_symbol, _symbol, 18)
    {
        // Intentionally left blank
    }
}
