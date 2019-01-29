const linkUtils = require('./generateLinks');
const eventListener = require('./eventListener');
const { ABI:NFT_LINKDROP_ABI } = require('./metadata/linkdropNFT');
const { ABI:ERC20_LINKDROP_ABI } = require('./metadata/linkdropERC20');

// library api
const LinkSDK = ({ verificationPK, contractAddress, networkId=1, host="https://volca.app" }) => {

    let _verificationPK = verificationPK;
    let _contractAddress = contractAddress;
    let _networkId = networkId;
    let _host = host;

    
    const generateLinkNFT = (tokenId) => {
	return linkUtils.generateClaimLinkNFT({
	    tokenId,	    
	    contractAddress: _contractAddress,
	    verificationPK: _verificationPK,
	    networkId: _networkId,
	    host: _host
	});
    };

    const subscribeForClaimEventsNFT = (cb) => {
	eventListener.subscribeForClaimEventsNFT(_contractAddress, _networkId, cb);
    };

    const generateLinkERC20 = () => {
	return linkUtils.generateClaimLinkERC20({
	    contractAddress: _contractAddress,
	    verificationPK: _verificationPK,
	    networkId: _networkId,
	    host: _host
	});
    };

    const subscribeForClaimEventsERC20 = (cb) => {
	eventListener.subscribeForClaimEventsERC20(_contractAddress, _networkId, cb);
    };

    const isLinkClaimed = (linkId) => {
	return eventListener.isLinkClaimed(linkId, _contractAddress, _networkId);
    }
    
    return {
	generateLinkERC20,
	subscribeForClaimEventsERC20,
	generateLinkNFT,
	subscribeForClaimEventsNFT,
	isLinkClaimed,
	NFT_LINKDROP_ABI,
	ERC20_LINKDROP_ABI
    };
}


module.exports = LinkSDK;
