// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TokenA is ERC20 {
    address public owner1;
    uint256 amount = 1000 * 1e18;

    constructor() ERC20("TOKEN A", "TKA") {
        owner1 = msg.sender;
        _mint(owner1, amount);
    }
}
