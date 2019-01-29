const utils = require('./utils');
const HOST = 'https://volca.app';


/**
 * @desc Generate claim link (NFT).
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

/**
 * @desc Generate claim link ERC20.
 * @param  {String}  [contractAddress] - Airdrop Contract address
 * @param  {String}  [verificationPK] - Transit Private key from the URL params
 * @param  {String}  [host] - Claim Link's server host, e.g. 'https://eth2air.io'  
 * @return {String}
 */
const generateClaimLinkERC20 = ({ verificationPK, contractAddress, host=HOST, networkId=1, referralAddress='0x0000000000000000000000000000000000000000' }) => {

    // generate random key pair
    const { address, privateKey } = utils.generateAccount();
    
    // sign private key with the Airdrop Transit Private Key
    const { v, r, s } = utils.sign2Addresses({address, referralAddress, privateKey: verificationPK});

    // construct link
    let link = `${host}/#/r?v=${v}&r=${r}&s=${s}&pk=${privateKey.toString('hex')}&c=${contractAddress}`;
    if (referralAddress !== '0x0000000000000000000000000000000000000000') {
	link = `${link}&ref=${referralAddress}`;
    }
    
    if (String(networkId) === "3") {
	link = `${link}&n=3`;
    }
    
    return {
	link, linkId: address.toLowerCase()
    };
}


module.exports = { 
    generateClaimLinkNFT,
    generateClaimLinkERC20
}
