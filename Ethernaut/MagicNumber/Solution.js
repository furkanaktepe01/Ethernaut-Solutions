/**

MagicNumber
 
Vulnerability:

Preventative Techniques:

*/

import { ContractFactory } from "ethers";

const attack = async (abi, wallet) => {

    const bytecode = "0x600a80600c6000396000f3fe602a60005260206000f3";

    const factory = new ContractFactory(abi , bytecode, wallet);

    const { target } = await factory.deploy(); 

    await (await contract.setSolver(target)).wait();
}
