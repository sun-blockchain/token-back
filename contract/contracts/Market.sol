pragma solidity ^0.5.0;
import "./Point.sol";

contract Market {
    struct Item {
        uint256 price;
        address owner;
        bool isSelling;
    }

    /**
     * timeStart: Timeline to calculate the next interest amount
     * currentFund: Current fund without taking next interest (convert to ONE)
     */

    struct Balance {
        uint256 timeStart;
        uint256 currentFund;
    }

    Point public pointContract;
    address public managerAddress;
    uint256 public rate;
    uint256 public interestRate;

    uint256[] public sellingItems;
    Item[] public items;
    mapping(address => uint256[]) public buyerItems;
    mapping(address => Balance) public userBalance;

    //EVENT

    /** emitted when a new item is sell in Market
     */
    event Sell(uint256 id, uint256 price, address owner);

    modifier onlyManager() {
        require(msg.sender == managerAddress, "Must be manager");
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

    modifier pointContractMustExist() {
        require(
            address(pointContract) != address(0),
            "Point contract must exist!"
        );
        _;
    }

    //FUNCTION
    constructor() public {
        managerAddress = msg.sender;
    }

    function setPointContract(address _pointContractAddress)
        public
        onlyManager
    {
        require(
            _pointContractAddress != address(0),
            "Point contract address must not be null address!"
        );

        pointContract = Point(_pointContractAddress);
    }

    function setRate(uint256 _rate) public onlyManager {
        rate = _rate;
    }

    function setInterestRate(uint256 _interestRate) public onlyManager {
        interestRate = _interestRate;
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

    function buy(uint256 _id)
        public
        payable
        itemInList(_id)
        itemOnSale(_id)
        pointContractMustExist
    {
        Item storage item = items[_id];
        require(msg.value >= item.price, "Must have enough money");
        item.isSelling = false;
        buyerItems[msg.sender].push(_id);
        removeFromSellingItem(_id);

        // update currentFund before adding point
        Balance storage balance = userBalance[msg.sender];
        uint256 currentPoint = pointContract.balanceOf(msg.sender);
        balance.currentFund +=
            (((block.timestamp - balance.timeStart) / (1 days)) *
                interestRate *
                currentPoint) /
            100;
        balance.timeStart = block.timestamp;

        // calculate and back point
        uint256 pointAmount = (rate * item.price) / 1000;
        pointContract.mint(msg.sender, pointAmount);
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
