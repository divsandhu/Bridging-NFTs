require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();

const {PRIVATE_KEY,PRIVATE_AMOY } = process.env;
module.exports = {
  solidity: {
    version: "0.8.20", // Use the highest version required by your contracts
    settings: {
        optimizer: {
            enabled: true,
            runs: 200
        }
    }
},
    networks: {
        sepolia: {
            url: `https://eth-sepolia.g.alchemy.com/v2/k62bdQ-d8cNT4tx_J85RDC2I1F8tbCYq`,
            accounts: [`0x${PRIVATE_KEY}`]
        },
        amoy: {
            url: `https://polygon-amoy.g.alchemy.com/v2/k62bdQ-d8cNT4tx_J85RDC2I1F8tbCYq`,
            accounts: [`0x${PRIVATE_AMOY}`]
        }
    }
};
