/*Program 1  

Create a program that has an array of the names of states in which people in 
a research study were born. The program lets the user add a new state, then 
the program adds the new state to the end of the array. The user can input the 
state using any case (eg. Utah, utah, uTah, etc), but all the states in the array 
must be in the form: Utah.

The resulting array must be in alphabetical order, and is show to the user, one 
state per line.

Note: you can assume no duplicate states will be input by the user. 

Requirements

Must use array method(s) to add a state to the array.
The user can add a state to the array using any case they want.
After each addition, the contents of the array is output to a popup using a 
temporal literal, one state per line.
Output must show the states in alphabetical order.
No controls are used.
No hard-coding may be used.
*/

let statesArray = []
let stateInput = prompt('Please enter a state')
while (stateInput != ''){
  statesArray.push(stateInput)
  stateInput = prompt('Please enter a state or enter nothing to end the array.')
  }
i = 0

statesArray = statesArray.sort()
console.log(statesArray)

while (i < statesArray.length){
  let newState = statesArray[i].toLowerCase()
  finalState = newState.charAt(0).toUpperCase() + newState.slice(1)
  i +=1
  alert('The state you entered was: ' + finalState)
}


