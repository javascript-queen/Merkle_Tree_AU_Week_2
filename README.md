# ✨ Things to Tackle

## ⭐️ On the client side:
 - Prove to the server we're on the nice list
 - Add request body parameters
## ⭐️ On the server side:
-  Hardcode a merkle root representing the whole list (I did it with a function)
- Grab the parameters from the front-end (client side)
- Prove that a name is in the list

## ⭐️ The way the client side works:

<img width="400" alt="Screenshot 2023-07-29 at 06 00 05" src="https://github.com/javascript-queen/Merkle_Tree_AU_Week_2/assets/90614620/c47c49e0-bed5-49c5-b513-d7b7b006e696">

This text below was added along with a fork from the Alchemy University repo [here](https://github.com/alchemyplatform/GiftList).

# ✨ Gift List

To get started with the repository, clone it and then run `npm install` in the top-level directory to install the depedencies.

There are three folders in this repository:

## ⭐️ Client

You can run the client from the top-level directory with `node client/index`. This file is a script which will send an HTTP request to the server.

Think of the client as the _prover_ here. It needs to prove to the server that some `name` is in the `MERKLE_ROOT` on the server. 

## ⭐️ Server

You can run the server from the top-level directory with `node server/index`. This file is an express server which will be hosted on port 1225 and respond to the client's request.

Think of the server as the _verifier_ here. It needs to verify that the `name` passed by the client is in the `MERKLE_ROOT`. If it is, then we can send the gift! 

## ⭐️ Utils

There are a few files in utils:

- The `niceList.json` which contains all the names of the people who deserve a gift this year (this is randomly generated, feel free to add yourself and others to this list!)
- The `example.js` script shows how we can generate a root, generate a proof and verify that some value is in the root using the proof. Try it out from the top-level folder with `node/example.js`
- The `MerkleTree.js` should look familiar from the Merkle Tree module! This one has been modified so you should not have to deal with any crypto type conversion. You can import this in your client/server
- The `verifyProof.js` should also look familiar. This was the last stage in the module. You can use this function to prove a name is in the merkle root, as show in the example.
