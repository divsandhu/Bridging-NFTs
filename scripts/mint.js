const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    const MyNFT = await ethers.getContractFactory("MyNFT");
    const myNFT = await MyNFT.attach("0xBA357E30B8776887B8Dd9a613b5d4390A76eF430");  // Replace with deployed contract address

    const prompts = [
        "Astronaut wondering in the outer galaxies.",
        "Astronauts in awe-inspiring cosmic settings.",
        "Children watching astronauts from earth.",
        "Astronauts in awe-inspiring cosmic settings.",
        "Children watching astronauts from earth."
    ];

    const imageUrls = [
        "https://gateway.pinata.cloud/ipfs/QmaJieq5CT3MbwJ93aAExYXaqVEAoNa44qD9Buoy7aDw8Gg",
        "https://gateway.pinata.cloud/ipfs/QmSpMMUQC4mxudsyG3PM6sJH8oTN57rxxNWTyBWJFWukqn",
        "https://gateway.pinata.cloud/ipfs/QmQpBopwegC8nZhNFHhcyqUoF6nL7qV2opKPpKMD7PxJ8y",
        "https://gateway.pinata.cloud/ipfs/QmYJ8aLZDqMDKXftq7AJyg6so2MpFdMzogN9AyV5w1PVF6",
        "https://gateway.pinata.cloud/ipfs/QmbaSedQXAdaJEuvLMeup51v38nAUxpBAPRUoaog1hKdLD"
    ];

    // Batch minting 5 NFTs
    await myNFT.mint(deployer.address, 5);

    // Set prompts and metadata for each token
    for (let i = 0; i < 5; i++) {
        const tokenId = i; // Token IDs will start from 0 and increment
        await myNFT.setPrompt(tokenId, prompts[i]);
        // Log details for verification
        console.log(`Minted NFT ${tokenId} with prompt: "${prompts[i]}" and image URL: ${imageUrls[i]}`);
    }
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
