const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/MyNFT.sol/MyNFT.json"); // Ensure this path is correct

const tokenAddress = "0xBFFb538853dB7E41D0C47bF2A0375deb48abd262"; // Replace with your ERC721A contract address
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0xAAF9E4a20De05094c042Cae16FF6bd58e23461B7"; // Replace with the address you want to check

async function main() {
    // Get the contract instance
    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

    // Fetch the balance of NFTs for the specified wallet address
    const balance = await token.balanceOf(walletAddress);
    
    // Log the balance
    console.log(`You now have ${balance.toString()} NFTs.`);
}

// Run the main function and handle errors
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
