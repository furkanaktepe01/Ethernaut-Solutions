/**

Elevator
 
Vulnerability:
Called contract might be updating its state 
to mess up the logic of the calling contract

Preventative Techniques:
Call view or pure functions to stay safe from such state updates
When calling a non-view function, beware what it does so that no unwanted event occurs

*/
