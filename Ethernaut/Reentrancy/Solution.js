/**

Reentrancy
 
Vulnerability:
Receiver of the ether might be a contract 
that reenters the sender contract via its recieve function

Preventative Techniques:
Use a mutex
Use Checks-Effects-Interactions Pattern
Use transfer which forwards only 2300 gas

*/
