# NFT Bridging Project

This project demonstrates the creation and bridging of NFTs between two Ethereum-compatible testnets: Sepolia and Amoy. The project uses the ERC721A contract standard for efficient NFT minting, with each NFT having a unique metadata URI stored on IPFS.

## Table of Contents

- [Project Overview](#project-overview)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [Deployment](#deployment)
- [Minting](#minting)
- [Balance Check](#balance-check)
- [Bridging NFTs](#bridging-nfts)
- [Troubleshooting](#troubleshooting)

## Project Overview

This project involves:
1. Deploying an ERC721A-based NFT smart contract on the Sepolia testnet.
2. Minting NFTs with unique metadata, including images hosted on IPFS.
3. Checking the balance of NFTs on the Amoy testnet.
4. Bridging the NFTs from Sepolia to Amoy.

## Project Structure

- **contracts/**: Contains the Solidity smart contracts.
  - `MyNFT.sol`: The main ERC721A-based NFT contract.
- **scripts/**: Contains scripts to deploy contracts, mint NFTs, and check balances.
  - `deploy.js`: Script to deploy the NFT contract.
  - `mint.js`: Script to mint NFTs.
  - `getBalance.js`: Script to check the balance of NFTs.
- **artifacts/**: Auto-generated folder by Hardhat containing compiled contracts and ABI.
- **hardhat.config.js**: Configuration file for Hardhat, including network and compiler settings.
- **.env**: Environment variables, including private keys for testnets (not included in version control).

## ERC721A Contract
```plaintext
The ERC721A contract is an optimized implementation of the ERC721 standard. It is designed to save on gas costs during batch minting operations, which is particularly useful for projects minting large quantities of NFTs at once. Unlike the standard ERC721 contract, which assigns a unique token ID sequentially for each minted NFT, ERC721A allows for minting multiple NFTs in a single transaction. This significantly reduces the gas fees associated with each minting process.

Key Features of ERC721A:

Batch Minting: Mint multiple tokens in a single transaction with reduced gas costs.
Optimized Storage: Efficient storage of token ownership data.
Compatibility: Fully compatible with the ERC721 standard, ensuring that the tokens can be easily used with existing dApps and platforms like OpenSea.
```
## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/nft-bridging.git
   cd nft-bridging
2. **Install dependencies**:
    ```bash
    npm install

## Deployment
1. **To deploy the NFT contract on Sepolia**:
    ```bash
    npx hardhat run scripts/deploy.js --network sepolia
2. **Minting**:
    ```bash
    npx hardhat run scripts/mint.js --network sepolia
3. **Approve Deposit**:
    ```bash
    npx hardhat run scripts/approveDeposit.js --network sepolia
4. **Get Balance on amoy**:
    ```bash
    npx hardhat run scripts/getBalance.js --network amoy

# License
This project is licensed under the MIT License.

# Author
Divyansh Sandhu