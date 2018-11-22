# Volca link generator
Node.js Library to generate claiming links


## Installation
```bash
npm i --save git+https://github.com/VolcaTech/volca-link-sdk#v0.2
```
## Usage
### Generating claim link
```js
// import library
const VolcaLinkSDK = require('volca-link-sdk');

// init link generator
const volcaLinkSDK = VolcaLinkSDK({
    verificationPK: '2d61a347f1f5abfb1159f907ada79982d50f80404c59af634444bfa417d49bae',
    contractAddress: '0xc6c1bf3f603a71e07a098b7ead7a00dee64c10ed',
    networkId: '3',
    host: 'https://volca.app'
});

// USAGE EXAMPLE:
// Generating claim link for tokenId #1                                                                                                                                              
const tokenId = 1;  // nft id, e.g. 1
const { link, linkId } = volcaLinkSDK.generateLinkNFT(tokenId);
console.log({link, linkId});

// subscribe for claim events
console.log("Subscribing for claim events");
volcaLinkSDK.subscribeForClaimEventsNFT((linkId, tokenId, receiver, timestamp, event) => {
    console.log({linkId, tokenId, receiver, timestamp, event});
});
```
