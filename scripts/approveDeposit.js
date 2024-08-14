const hre = require("hardhat");
const fxRootContractABI = require("../fxRootContractABI.json");
const tokenContractJSON = require("../artifacts/contracts/MyNFT.sol/MyNFT.json"); 
const NUMBER_OF_TOKENS = 5; // Number of NFTs to deposit
const tokenAddress = "0xBA357E30B8776887B8Dd9a613b5d4390A76eF430"; // Your ERC721 contract address
const fxERC721RootTunnel = "0x9E688939Cb5d484e401933D850207D6750852053"; // FxPortal Tunnel contract address
const walletAddress = "0xAAF9E4a20De05094c042Cae16FF6bd58e23461B7"; // Your wallet address

async function main() {
  // Fetch contract instances
  const tokenContract = await hre.ethers.getContractAt(tokenContractJSON.abi, tokenAddress);
  const fxContract = await hre.ethers.getContractAt(fxRootContractABI, fxERC721RootTunnel);

  // Approve the FxPortal bridge to transfer all NFTs
  const approveTx = await tokenContract.setApprovalForAll(fxERC721RootTunnel, true);
  await approveTx.wait();
  console.log("Approval confirmed");

  // Deposit each NFT to the FxPortal bridge
  for (let i = 0; i < NUMBER_OF_TOKENS; i++) {
    const depositTx = await fxContract.deposit(tokenAddress, walletAddress, i, "0x6556");
    await depositTx.wait();
    console.log(`Depositing NFT ${i+1}: Successful`);
  }

  console.log("All NFTs have been successfully deposited to the FxPortal bridge");
}

// Execute the main function and handle any errors
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
