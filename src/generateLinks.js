const utils = require('./utils');
const HOST = 'https://volca.app';


/**
 * @desc Generate claim link.
 * @param  {String}  [contractAddress] - Airdrop Contract address
 * @param  {String}  [verificationPK] - Transit Private key from the URL params
 * @param  {String}  [host] - Claim Link's server host, e.g. 'https://eth2air.io'  
 * @return {String}
 */
const generateClaimLinkNFT = ({ tokenId, verificationPK, contractAddress, host=HOST, networkId=1 }) => {

    // generate random key pair
    const { address, privateKey } = utils.generateAccount();
    
    // sign private key with the Airdrop Transit Private Key
    const { v, r, s } = utils.signLinkPKForNFT({address, tokenId, privateKey: verificationPK});

    // construct link
    let link = `${host}/#/receive-nft?v=${v}&r=${r}&s=${s}&pk=${privateKey.toString('hex')}&c=${contractAddress}&t=${tokenId}`;
    
    if (String(networkId) === "3") {
	link = `${link}&n=3`;
    }
    
    return { link, linkId: address.toLowerCase()};
}

module.exports = { 
    generateClaimLinkNFT
}
