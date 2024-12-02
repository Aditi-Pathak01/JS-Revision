/*Rest Operator and Objects in Fx 
(1)REST OPERATOR:- allows to take multiple msges!
function calPrice(num) {
  console.log(num);
}
calPrice(100, 2000); // 100

function calPrice2(...num) {
  console.log(num);
}
calPrice(100, 2000); //array [100,2000]
*/
//Interview Question :-
function calPrice3(val1, val2, ...num) {
  console.log(val1, val2);
  console.log(num);
}
calPrice3(100, 200, 300, 400); //array
/*(2)Objects in Fx
3 steps  
make an obj,
make a fx handling obj(parameter ===obj),fx call(argument === object created)
ctbe === obj.key 
*/
const user = {
  name: "Aditi",
  place: "Blr",
};
function handleUserObj(obj) {
  console.log(`this users name is ${obj.name} and she lives in ${obj.place}`);
}
handleUserObj(user);

//easy way
function handleObj(obj) {
  console.log(`this users name is ${obj.name} and she lives in ${obj.place}`);
}
handleObj({ name: "Sam", place: "NY" });

//handling array
let arr = [1, 2, 3, 4, 5];
function handleArr(arr) {
  console.log(arr[1]); //2
}
handleArr(arr);
