/**

Shop
 
Vulnerability:
State-change based on an untrusted external response
An external view function might give different responses even during the execution of the current transaction
Either based on state-changes in previous contracts in the call stack or gasleft 

Preventative Techniques:
Beware responses from external view calls even within the transaction's lifetime might not be invariant

*/