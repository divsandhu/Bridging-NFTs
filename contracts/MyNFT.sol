// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyNFT is ERC721A, Ownable {
    mapping(uint256 => string) private _prompts;

    constructor() ERC721A("MyNFT", "MNFT") Ownable(msg.sender){
        // transferOwnership(msg.sender);
    }

    function setPrompt(uint256 tokenId, string memory prompt) public onlyOwner {
        _prompts[tokenId] = prompt;
    }

    function promptDescription(uint256 tokenId) public view returns (string memory) {
        return _prompts[tokenId];
    }

    function mint(address to, uint256 quantity) public onlyOwner {
        _mint(to, quantity);
    }
}
