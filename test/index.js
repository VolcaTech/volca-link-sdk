const VolcaLinkSDK = require('./../src');


const test = async () => { 
    console.log("here");

    const volcaLinkSDK = VolcaLinkSDK({
      verificationPK: '034fff60f00d630ab75ddeedd61378801895dda9b0c9c8970d150558601e938a',
      contractAddress: '0xce5579a97be98d6ed943560389819aafbc7f229c',
      networkId: '3',
       	host: 'https://volca.app'
     });

    const { link, linkId } = volcaLinkSDK.generateLinkERC20();
    console.log({link, linkId });

    const linkClaimed = await volcaLinkSDK.isLinkClaimed(linkId);
    console.log({linkClaimed})

    const tokenId = 5;  // nft id, e.g. 1
    const { link, linkId } = volcaLinkSDK.generateLinkNFT(tokenId);
    console.log("NFT link: ");
    console.log({link, linkId});
    console.log("---------");
    console.log("");

    const { link:linkERC20, linkId: linkIdERC20 } = volcaLinkSDK.generateLinkERC20(tokenId);
    console.log("ERC20 link: ");
    console.log({linkERC20, linkIdERC20});
    console.log("---------");
    console.log("");



    
    // subscribe for NFT claim events
    volcaLinkSDK.subscribeForClaimEventsNFT((linkId, tokenId, receiver, timestamp, event) => {
    	console.log("got event " +  tokenId);
    	console.log({linkId, tokenId, receiver, timestamp, event});
    });
    
    // subscribe for ERC20 claim events
    volcaLinkSDK.subscribeForClaimEventsERC20((linkId, tokenId, receiver, timestamp, event) => {
    	console.log("got event " +  tokenId);
     	console.log({linkId, receiver, timestamp, event});
    });
}

test();
