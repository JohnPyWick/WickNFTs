require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.0",
      },
      {
        version: "0.8.9",
      },
    ],
  },
  networks: {
    mumbai: {
      url: 'https://rpc-mumbai.maticvigil.com',
      accounts: ["21f4594e8ac7b97601b45563b5739cceabf74ed5c7ac6de2f5e129921b9b5821"],
    },
    goerli: {
      url: `https://rpc.ankr.com/eth_goerli`,
      accounts: ["21f4594e8ac7b97601b45563b5739cceabf74ed5c7ac6de2f5e129921b9b5821"],
    },
  },
};
