// functions for deploying airdrop
//import { deployContract } from './deployContract';
//import { approveContract } from './apprveContract';
const linkUtils = require('./generateLinks');

// functions for claiming tokens
//import { getAirdropParams, isLinkClaimed } from './getAirdropParams';
//import { claimTokens, claimNFT } from './claimTokens';


// library api

const LinkGenerator = ({ verificationPK, contractAddress, networkId=1 }) => {

    let _verificationPK = verificationPK;
    let _contractAddress = contractAddress;
    let _networkId = networkId;
    
    
    const generateLinkNFT = (tokenId) => {
	return linkUtils.generateClaimLinkNFT({
	    contractAddress: _contractAddress,
	    verificationPK: _verificationPK,
	    tokenId,
	    networkId
	});
    };

    
    return {
	generateLinkNFT
    };
}


module.exports = LinkGenerator;

