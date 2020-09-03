pragma solidity ^0.5.0;
import "./Point.sol";

contract Market {
    struct Item {
        uint256 price;
        address owner;
        bool isSelling;
    }

    address public point;
    address public manager;

    uint256[] public sellingItems;
    Item[] public items;
    mapping(address => uint256[]) public buyerItems;

    //EVENT

    /** emitted when a new item is sell in Market
     */
    event Sell(uint256 id, uint256 price, address owner);

    modifier onlyManager() {
        require(msg.sender == manager, "Must be manager");
        _;
    }

    //MODIFIER
    modifier itemInList(uint256 _id) {
        require(_id < items.length, "Item must be exist");
        _;
    }

    modifier itemOnSale(uint256 _id) {
        require(items[_id].isSelling, "Item must be on sale");
        _;
    }

    //FUNCTION
    constructor() public {
        manager = msg.sender;
    }

    function getItemById(uint256 _id)
        public
        view
        itemInList(_id)
        returns (uint256, address)
    {
        Item storage item = items[_id];
        return (item.price, item.owner);
    }

    function itemsOf(address _owner) public view returns (uint256[] memory) {
        return buyerItems[_owner];
    }

    function getMarketBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function sell(uint256 _price, address _owner) public {
        items.push(Item(_price, _owner, true));
        sellingItems.push(items.length - 1);
        emit Sell(items.length - 1, _price, _owner);
    }

    function buy(uint256 _id) public payable itemInList(_id) itemOnSale(_id) {
        Item storage item = items[_id];
        require(msg.value >= item.price, "Must have enough money");
        item.isSelling = false;
        buyerItems[msg.sender].push(_id);
        removeFromSellingItem(_id);
    }

    /** Remove item in sellingItems when it was bought
     */
    function removeFromSellingItem(uint256 _id) internal {
        for (uint256 i; i < sellingItems.length; i++) {
            if (sellingItems[i] == _id) {
                sellingItems[i] = sellingItems[sellingItems.length - 1];
                sellingItems.pop();
                break;
            }
        }
    }
}
