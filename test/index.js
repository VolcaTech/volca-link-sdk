const VolcaLinkSDK = require('./../src');


const test = async () => { 
    console.log("here");

    // init link generator
    // const volcaLinkSDK = VolcaLinkSDK({
    // 	verificationPK: '034fff60f00d630ab75ddeedd61378801895dda9b0c9c8970d150558601e938a',
    // 	contractAddress: '0xce5579a97be98d6ed943560389819aafbc7f229c',
    // 	networkId: '3',
    // 	host: 'https://volca.app'
    // });

    // // Usage example:
    // // Generating claim link for tokenId #1
    // const tokenId = 5;  // nft id, e.g. 1
    // const { link, linkId } = volcaLinkSDK.generateLinkNFT(tokenId);
    // console.log("NFT link: ");
    // console.log({link, linkId});
    // console.log("---------");
    // console.log("");

    // const { link:linkERC20, linkId: linkIdERC20 } = volcaLinkSDK.generateLinkERC20(tokenId);
    // console.log("ERC20 link: ");
    // console.log({linkERC20, linkIdERC20});
    // console.log("---------");
    // console.log("");
    
    // // subscribe for NFT claim events
    // volcaLinkSDK.subscribeForClaimEventsNFT((linkId, tokenId, receiver, timestamp, event) => {
    // 	console.log("got event " +  tokenId);
    // 	console.log({linkId, tokenId, receiver, timestamp, event});
    // });
    
    // // subscribe for ERC20 claim events
    // volcaLinkSDK.subscribeForClaimEventsERC20((linkId, tokenId, receiver, timestamp, event) => {
    // 	console.log("got event " +  tokenId);
    // 	console.log({linkId, receiver, timestamp, event});
    // });

    // import library
    //const VolcaLinkSDK = require('volca-link-sdk');

    // init link generator
    const volcaLinkSDK = VolcaLinkSDK({
	verificationPK: '7038c4e7f3e2dabd326fded038175bf7d2eb9bd714d934b454e237d14d38d23a',
	contractAddress: '0x3fcd36c8e35fddd2f63a33750bd17757a2f1738e',
	networkId: '3',
	host: 'https://volca.app'
    });

    // USAGE EXAMPLE:
    // Generating claim link for tokenId #1
    const { link, linkId } = volcaLinkSDK.generateLinkERC20();
    console.log({link, linkId });

    const linkClaimed = await volcaLinkSDK.isLinkClaimed("0x76bf9cd0460d3a0a141663a9b371c904cc562de6");
    console.log({linkClaimed})
    
    // subscribe for claim events
    console.log("Subscribing for claim events");
    volcaLinkSDK.subscribeForClaimEventsERC20((linkId, receiver, timestamp, event) => {
	console.log({linkId, receiver, timestamp, event});
    });
}

test();
