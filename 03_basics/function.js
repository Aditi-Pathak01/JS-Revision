/*
 *(1)Fx Defination
 *(2)Fx Reference and Call
 *(3)return keyword in Fx
 *(4)False Values
 *(5)!
 *(6)default values
 */

//(1)Fx Defination :- function keyword, function name ,paranthesis(parameters) syntax:- function FxName(parameters){ctbe}
function addTwoNum(a, b) {
  console.log(a + b);
}
//(2)Fx reference :- addTwoNum (fx name alone) , Fxcall :-EXECUTES THE FX, FxName(arguments) ie,Fx name + (arguments) ,
addTwoNum(4, 5);
//(3)return keyword in fx
//Bad Practise
function addTwoNum2(a, b) {
  console.log(a + b);
}
addTwoNum2(4, 5); // prints 9
let result = addTwoNum2(4, 5); // prints 9
console.log(result); // undefined

//Correct way
function addTwoNum3(a, b) {
  let result = a + b;
  return result;
}
console.log("Result: ", result);
// anything written after return is unreachable code and not executed (RULE OF  A FX)
// return used , then only variable storage allowed

//(4)False Values :-empty strings,undefined
//(5)! means not in js
function userMsg(name) {
  if (!name) {
    return `please enter name`; //executed as name is undefined
  }
  return `hello! ${name}`;
}
console.log(userMsg()); //if  name is undefined! [if argument not given for the parameter(name),then name is undefined and !name is true "] == then if statement will be executed!

//(default values)
function userMsg2(name = "Sam") {
  if (!name) {
    return `please enter name`; //never be executed as name has a default value! = sam
  }
  return `hello! ${name}`;
}
console.log(userMsg2()); // even if we dont pass arguments! name will never be undefined // hello sam returned!
