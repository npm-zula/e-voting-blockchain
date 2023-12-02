// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.8.0;

contract Migrations {
    address public owner;
    uint256 public last_completed_migration;

    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);
    event MigrationCompleted(uint256 completed);

    modifier onlyOwner() {
        require(msg.sender == owner, "Caller is not the owner");
        _;
    }

    constructor() {
        owner = msg.sender;
        emit OwnershipTransferred(address(0), msg.sender);
    }

    function transferOwnership(address newOwner) public onlyOwner {
        require(newOwner != address(0), "New owner is the zero address");
        emit OwnershipTransferred(owner, newOwner);
        owner = newOwner;
    }

    function setCompleted(uint256 completed) public onlyOwner {
        last_completed_migration = completed;
        emit MigrationCompleted(completed);
    }
}
