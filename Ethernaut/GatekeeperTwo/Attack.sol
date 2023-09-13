// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./GatekeeperTwo.sol";

contract GatekeeperTwoHack {

    GatekeeperTwo target;

    constructor(address _target) {

        target = GatekeeperTwo(_target);

        uint64 sender = uint64(bytes8(keccak256(abi.encodePacked(address(this)))));

        bytes8 gateKey = bytes8(sender ^ type(uint64).max);

        /**
            sender ^ gateKey = sender ^ (sender ^ max) = (sender ^ sender) ^ max = 0 ^ max = max
         */

        target.enter(gateKey);
    }
}