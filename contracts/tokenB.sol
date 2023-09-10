// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TokenB is ERC20 {
    address public owner2;
    uint256 amount = 1000;

    constructor() ERC20("TOKEN B", "TKB") {
        owner2 = msg.sender;
        _mint(owner2, amount);
    }
}
