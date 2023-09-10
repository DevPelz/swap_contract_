// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

interface ISwap {
    function addLiquidity(uint256 _amountA, uint256 _amountB) external;

    function removeLiquidity(uint256 _amountA, uint256 _amountB) external;

    function swapTokenAForB(uint256 _amountA) external;

    function swapTokenBForA(uint256 _amountB) external;
}
