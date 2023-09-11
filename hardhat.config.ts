import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { configDotenv } from "dotenv";
require('dotenv').config();
configDotenv

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_RPC,
      //@ts-ignore
      accounts: [process.env.PRIVATEKEY]
    }
  },

   etherscan: {
    apiKey:process.env.ETHERSCAN_API_KEY,   
  },
};

export default config;
