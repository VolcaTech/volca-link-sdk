const PAromise = require('bluebird');
const Wallet = require('ethereumjs-wallet');
const Web3Utils = require('web3-utils');
const util = require("ethereumjs-util");

const SIGNATURE_PREFIX = "\x19Ethereum Signed Message:\n32";


/**
 * @desc Generate Ethereum Account
 * @return {'address': String, 'privateKey': String} 
 */
const generateAccount = () => {
    const wallet = Wallet.generate();
    const address = wallet.getChecksumAddressString();
    const privateKey = wallet.getPrivateKey();
    return { address, privateKey };
}



/**
 * @desc Sign message hash with private key.
 * @param  {String}  [privateKey]
 * @param  {String}  [msg] - message hash
 * @return {'v': Number, 'r': String, 's': String} 
 */
const _signWithPK = (privateKey, msg) => {
    return util.ecsign(Buffer.from(util.stripHexPrefix(msg), 'hex'), Buffer.from(privateKey, 'hex'));
}



/**
 * @desc Sign Ethereum address with private key.
 * @param  {String}  [privateKey]
 * @param  {String}  [address] - Ethereum address
 * @return {'v': Number, 'r': String, 's': String} 
 */
const signLinkPKForNFT = ({address, tokenId, privateKey}) => {
    const verificationHash = Web3Utils.soliditySha3(SIGNATURE_PREFIX, { type: 'address', value: address }, { type: 'uint256', value: tokenId });  
    const signature = _signWithPK(privateKey, verificationHash);
    const v = signature.v;
    const r = '0x' + signature.r.toString("hex");
    const s = '0x' + signature.s.toString("hex");
    return { v, r, s };
}

module.exports = {
    generateAccount,
    signLinkPKForNFT
}
