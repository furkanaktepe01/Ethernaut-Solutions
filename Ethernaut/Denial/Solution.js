/**

Denial 
 
Vulnerability:
External low-level calls might consume too much gas causing transaction to revert eventually

Preventative Techniques:
Specify a fixed gas stipend when making external low-level calls
External low-level calls consumes up to 63/64 of the gas avaliable at the time of the call
So remaining 1/64 can be use to mitigate the effects of potential attacks

*/

const attack = async () => {

    await contract.setWithdrawPartner('0x23Cd8e872Fe82E502daD67B3a3327994Fc621fE0');
}