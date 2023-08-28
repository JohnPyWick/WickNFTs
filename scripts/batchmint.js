const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/Darth.sol/Darth.json");
require('dotenv').config();

const tokenAddress = process.env.TARGET_ADDRESS; // Extract token address from .env
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0xbf58Fb0302C87056c3A5BDeeB16e50d6419178f1"; // place your public address for your wallet here

 // Array to store minted token IDs

async function main() {
    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    for (let i = 0; i < 5; i++) {
        const tx = await token.safeMint(walletAddress);
        const receipt = await tx.wait();

        // Check if the 'events' array is not empty
 
    }

    console.log("You now have: " + await token.balanceOf(walletAddress) + " tokens");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});


