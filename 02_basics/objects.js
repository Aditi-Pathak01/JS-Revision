/* Object PART-1 :-
 * (1)HOW TO MAKE OBJ - OBJECT LITERALS(multiple instances) AND CONSTRUCTOR FX(singlton)
 * (2)HOW TO EXCESS keys and value in obj? Obj.key // obj["key"]
 * (3)HOW TO CHANGE the key's value in obj? obj.key = "newVal"
 * (4)HOW TO ADD NEW KEY in a obj? obj.newKey = "newValue"
 * (5)HOW TO STOP CHANGE/ADD ?Object.freeze(obj)
 * (6)How to add Fx in a object ? and call fx ?
 * way1 == adding function inside the object itself
 * way2 == adding new key which has fx ,in the obj
 * (7)How to excess key of obj  inside a fx (inside obj/outside) :- string interpolation and this.key?
 * (8)How to use Symbol in an object ? [mySym]
 */ 
//(1)
let user = {
  name: "Aditi",
  age: 26,
};
console.log(user);
//(2)
console.log(user.name);
console.log(user["age"]);
//(3)
user.name = "Aditi Pathak";
console.log(user.name);
//(4)
user.dob = "01-10-1998";
console.log(user);
//(5)
Object.freeze(user);
user.login = true; //wont add due to freeze
console.log(user);
//(6) way 1
let user2 = {
  name: "Aditi",
  myFx: () => {
    console.log("myFx 1", this.name);
  },
  myFx2: function () {
    console.log("myFx 2");
  },
};
//way1
console.log(user2.myFx);
console.log(user2.myFx());
//way 2
let user3 = {};
user3.myFx3 = function () {
  console.log("this is user3,fx3");
};
console.log(user3);
console.log(user3.myFx3());
//(7)
let user4 = {
  name: "Aditi",
  place: "blr",
};
user4.years = function () {
  console.log(`hello ${this.name} from ${this.place}.`);
};
console.log(user4);
console.log(user4.years());
//(8)
const mySym = Symbol("$");
console.log(mySym); //$
const userId = {
  [mySym]: "$$$", // if sq bckt avoided mySym = string //not a symbol!
};
console.log(userId[mySym]); //$$$
//==============================================================================================================================//
/*
 * Object PART-2 :-
 *(1)How to make obj using constructor fx ?
 *(2)Excessing  Nested Objects ?
 *(3)Merging Objects,ie combining objects?
 *(4)How to excess things coming from DataBase? [{},{},{}]
 *(5)Object Methods  (4)?
 */
const conUser = new Object(); // (1) empty object,now i can add keys and value
console.log(conUser);

const regularUser = {
  userFullname: {
    firstName: "Aditi",
    lastName: "Pathak",
  },
};
//(2)Excessing Nested Objects
console.log(regularUser);
console.log(regularUser.userFullname.firstName); //Aditi
console.log(regularUser.userFullname.lastName); //Pathak

//(3)combining / merging objects :-2 ways
//concat doesnt work here because (unordered key value plairs in obj where ass array is ordered)
// Spread Operators and Object.assign is used!
const obj1 = {
  1: "A",
  2: "D",
};
const obj2 = {
  3: "I",
  4: "T",
};
const obj3 = { ...obj1, ...obj2 };

const obj4 = Object.assign({}, obj1, obj2);
//Object.assign(target,source) // target = {} and source = obj1,and obj2
//why {} ? === Good Practise , ensures empty object is the target where all thw source is added!
console.log(obj3);
console.log(obj4);
//both spread operator and Object.assign({},obj1,obj2) have same output

//(4)excessing info from db ? :- array of objects! ?
const userDb = [
  {
    id: "abc",
    email: "xyz@abc.com",
  },
  {},
  {},
];
console.log(userDb[0].id); // abc
//Object Methods :-(4) these give dataType = array (object) .. now array methods can be used! VIP

console.log(Object.keys(obj1)); //array of keys of obj1
console.log(Object.values(obj1)); //array of values of obj1
console.log(Object.entries(obj1)); // Complex Array(array inside array),,inside array has  [key : value] pair of object {this is one element}
console.log(Object.entries(obj1).flat(Infinity)); //simple array!

//hasOwnProperty
console.log(obj1.hasOwnProperty(1)); // returns a boolean value!

//================================================================================================================================================//

/* Object part3 :-
 *(1)Destructuring an Object (2)
 *(2)API JSON Intro
 */

//(1):-
//{i} Destructuring Object
const course = {
  courseInstructor: "Aditi",
};
const { courseInstructor } = course; //This is destructuring syntax. It extracts the value of the courseInstructor property from the course object and assigns it to a new variable named courseInstructor.
console.log(course); //whole course Obj
console.log(courseInstructor); // value of the key = "Aditi"
console.log({ courseInstructor }); // whole course Obj
/*(ii)Changing the key name ?
const { courseInstructor : instructor} = course;
console.log(instructor) // "Aditi"*/

/*(2)Json Apii ntro 
{i}Api call ==> data retruned in Json formatt(Js Object Notation)  ({}) // before  Xml formatt
{ii}Json format = key always in strings , value can be anything (string/numbeer/boolean)
{iii}Api Call = array format == json formatter = trew view 
*/
