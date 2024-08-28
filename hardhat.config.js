require("@nomicfoundation/hardhat-toolbox");

// The next line is part of the sample project, you don't need it in your
// project. It imports a Hardhat task definition, that can be used for
// testing the frontend.
require("./tasks/faucet");
const INFURA_API_KEY = "your-api-key";
const SEPOLIA_PRIVATE_KEY = "your-private-key";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  ignition: {
    requiredConfirmations: 1
  },
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/your-api-key`,
      accounts: [SEPOLIA_PRIVATE_KEY],
    },
  },
};