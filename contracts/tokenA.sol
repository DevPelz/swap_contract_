// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TokenA is ERC20 {
    address public owner1;
    uint256 amount = 1000;

    constructor() ERC20("TOKEN A", "TKA") {
        owner1 = 0x764693DD666E8dD9275CDE8F05C6B07446B1d941;
        _mint(owner1, amount);
    }
}
