const ethers = require('ethers');
const { ABI: LINKDROP_NFT_ABI } = require('./metadata/linkdropNFT');
const { ABI: LINKDROP_ERC20_ABI } = require('./metadata/linkdropERC20');

const subscribeForClaimEventsNFT = (linkdropAddress, networkId, callback) =>  {
    const network = String(networkId) === "3" ? "ropsten" : "mainnet";
    const provider = ethers.getDefaultProvider(network);
    const contract = new ethers.Contract(linkdropAddress, LINKDROP_NFT_ABI, provider);    
    contract.on("LogWithdraw", callback);
}

const subscribeForClaimEventsERC20 = (linkdropAddress, networkId, callback) =>  {
    const network = String(networkId) === "3" ? "ropsten" : "mainnet";
    const provider = ethers.getDefaultProvider(network);
    const contract = new ethers.Contract(linkdropAddress, LINKDROP_ERC20_ABI, provider);    
    contract.on("LogWithdraw", callback);
}


const isLinkClaimed = (linkId, linkdropAddress, networkId) =>  {
    const network = String(networkId) === "3" ? "ropsten" : "mainnet";
    const provider = ethers.getDefaultProvider(network);
    const contract = new ethers.Contract(linkdropAddress, LINKDROP_ERC20_ABI, provider);    
    return contract.isLinkClaimed(linkId);
}



module.exports = {
    isLinkClaimed,
    subscribeForClaimEventsNFT,
    subscribeForClaimEventsERC20
}

