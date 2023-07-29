const axios = require("axios");
const niceList = require("../utils/niceList.json");
const MerkleTree = require("../utils/MerkleTree");
// in order to use prompt() for a user's input
const prompt = require("prompt-sync")();

const serverUrl = 'http://localhost:1225';

async function main() {
  // 1. TODO: how do we prove to the server we're on the nice list? 

  // Copying the Merkle Tree from the MerkleTree function
  const merkleTree = new MerkleTree(niceList)

  // Getting the root from the function
  const root = merkleTree.getRoot();

  // Asking for a user's input with a prompt function
  const userInput = prompt("Enter the name you want to check here: ")

  // Checking if the user typed any input
  if (userInput === null) {
    console.log("Please enter the name you want to check here: ")
  }

  // Searching for the index of the name
  const index = niceList.findIndex(name => name === userInput)

  // Getting the proof from the MerkleTree
  const proof = merkleTree.getProof(index)

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    // TODO: add request body parameters here!
    userInput,
    proof
  });

  console.log({ gift });
}

main();