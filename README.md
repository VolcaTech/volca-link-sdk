# Volca link generator
Node.js Library to generate clai links


## Installation
```bash
npm i --save git+https://github.com/VolcaTech/volca-link-sdk#v0.3
```
## ERC20 Linkdrop
### 1. Deploy Linkdrop Smart Contract
To deploy Linkdrop Smart Contract follow the guide - https://medium.com/volc%C3%A0/how-to-deploy-an-erc20-linkdrop-fe3e4849ad40

### 2. Generate claim links
```js
// import library
const VolcaLinkSDK = require('volca-link-sdk');

const volcaLinkSDK = VolcaLinkSDK({
    verificationPK: <VERIFICATION_PRIVATE_KEY>,
    contractAddress: <LINKDROP_CONTRACT>,
    networkId: <NETWORK_ID>, // '1' - mainnet or '3' - ropsten
    host: <HOST> // host for generated links, by default it's 'https://volca.app'
 });

// Usage example:
// Generating link
const { link:linkERC20, linkId: linkIdERC20 } = volcaLinkSDK.generateLinkERC20();
console.log({linkERC20, linkIdERC20});
//
//
//
// subscribing for ERC20 claim events
volcaLinkSDK.subscribeForClaimEventsERC20((linkId, receiver, timestamp, event) => {
  console.log({linkId, receiver, timestamp, event});
});
//
// checking by linkId if link was claimed 
const linkClaimed = volcaLinkSDK.isLinkClaimed(linkId).then((linkClaimed) => {
  console.log({linkClaimed})
}); 
```

## NFT Linkdrop
### 1. Deploy Linkdrop Smart Contract
To deploy Linkdrop Smart Contract follow the guide - https://medium.com/@m.dobrokhvalov/how-to-deploy-nft-linkdrop-73b2741c25d0

### 2. Generate claim links
```js
// import library
const VolcaLinkSDK = require('volca-link-sdk');

const volcaLinkSDK = VolcaLinkSDK({
    verificationPK: <VERIFICATION_PRIVATE_KEY>,
    contractAddress: <LINKDROP_CONTRACT>,
    networkId: <NETWORK_ID>, // '1' - mainnet or '3' - ropsten
    host: <HOST> // host for generated links, by default it's 'https://volca.app'
 });

// Usage example
// Generating claim link for tokenId #1
const tokenId = 5;  // nft id, e.g. 1
const { link, linkId } = volcaLinkSDK.generateLinkNFT(tokenId);
console.log({link, linkId});
//
// subscribe for NFT claim events
volcaLinkSDK.subscribeForClaimEventsNFT((linkId, tokenId, receiver, timestamp, event) => {
  console.log("got event " +  tokenId);
  console.log({linkId, tokenId, receiver, timestamp, event});
});


```
### Supported Networks
Currently Mainnet and Ropsten networks are supported
