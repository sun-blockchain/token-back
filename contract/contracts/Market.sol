pragma solidity ^0.5.0;

contract Market {
    struct Item {
        uint256 price;
        address owner;
    }

    uint256[] public sellingItems;
    Item[] public items;

    constructor() public {}

    function sell(uint256 _price, address _owner) public {
        items.push(Item(_price, _owner));
        sellingItems.push(items.length - 1);
    }
}
