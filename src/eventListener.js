const ethers = require('ethers');
const { ABI } = require('./metadata/linkdropNFT');

const subscribeForClaimEventsNFT = (linkdropAddress, networkId, callback) =>  {
    const network = String(networkId) === "3" ? "ropsten" : "mainnet";
    const provider = ethers.getDefaultProvider(network);
    const contract = new ethers.Contract(linkdropAddress, ABI, provider);    
    contract.on("LogWithdraw", callback);
}

module.exports = {
    subscribeForClaimEventsNFT
}

