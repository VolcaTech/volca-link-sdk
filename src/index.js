const linkUtils = require('./generateLinks');


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

