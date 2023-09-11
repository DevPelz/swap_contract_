# Swap Contract

This README provides an overview of the **Swap** smart contract, designed for exchanging two different ERC-20 tokens, and includes details on how to use the contract.

## Table of Contents

- [Contract Overview](#contract-overview)
- [Usage](#usage)
- [Security Considerations](#security-considerations)
- [Verified Contract](#verified-contract)

---

## Contract Overview

The **Swap** contract is a Solidity smart contract developed for swapping ERC-20 tokens. Key features of this contract include:

- ERC-20 Token Support: The contract supports two ERC-20 tokens, referred to as `tokenA` and `tokenB`.

- Liquidity Providers: Users can become liquidity providers by adding tokens to the contract's reserves and removing them when needed.

- Token Swaps: Users can swap `tokenA` for `tokenB` or vice versa based on the current liquidity pool's reserves and exchange rate using `x * y = k` where `k` is constant.

- Secure Transfers: The contract uses a `_safeTransferFrom` function to ensure secure ERC-20 token transfers.

## Usage

To use the **Swap** contract:

1. **Deployment**: Deploy the contract by providing the addresses of the ERC-20 tokens you wish to swap (`_tokenA` and `_tokenB`).

2. **Adding Liquidity**: Users can become liquidity providers by adding liquidity to the contract. This is achieved by calling the `addLiquidity` function and providing the amounts of `tokenA` and `tokenB` to contribute.

3. **Removing Liquidity**: Liquidity providers can remove their liquidity by calling the `removeLiquidity` function and specifying the amounts of `tokenA` and `tokenB` they wish to withdraw.

4. **Swapping Tokens**: Users can swap `tokenA` for `tokenB` or `tokenB` for `tokenA` by calling the respective `swapTokenAForB` or `swapTokenBForA` functions. These functions calculate the exchange rate based on the current reserves and provide the swapped tokens.

## Security Considerations

- Ensure that users have approved the contract to spend their ERC-20 tokens by setting allowances appropriately.

- The contract has mechanisms to prevent unauthorized swaps and handle insufficient liquidity.

- Thoroughly review and test the contract before deploying it in a production environment.

---

## Verified Contract

- [Swap contract address](https://sepolia.etherscan.io/address/0x4ac04c80F69a4743F9e38e84A60cFA55ecb8DC47#code)
- [TokenA contract address](https://sepolia.etherscan.io/address/0x7E0574e87c0040f837b6214158f27d5bB50330B7#code)
- [TokenB contract address](https://sepolia.etherscan.io/address/0x04f24c5514491AD0843480aCAe707319B3FCb176#code)

---

Use this README as a reference guide to understand and utilize the **Swap** smart contract. It is essential to exercise caution and conduct thorough testing before deploying the contract in a live Ethereum environment.
