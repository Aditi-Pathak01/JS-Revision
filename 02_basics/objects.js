/**
 * (1)HOW TO MAKE OBJ - OBJECT LITERALS(multiple instances) AND CONSTRUCTOR FX(singlton)
 * (2)HOW TO EXCESS keys and value in obj? Obj.key // obj["key"]
 * (3)HOW TO CHANGE the key's value in obj? obj.key = "newVal"
 * (4)HOW TO ADD NEW KEY in a obj? obj.newKey = "newValue"
 * (5)HOW TO STOP CHANGE/ADD ?Object.freeze(obj)
 * (6)How to add Fx in a object ? and call fx ?
 * way1 == adding function inside the object itself
 * way2 == adding new key which has fx ,in the obj
 * (7)How to excess key of obj using this in a fx ?
 * (8)How to use Symbol in an object ?
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
console.log(mySym);//$
const userId = {
  [mySym]: "$$$",
};
console.log(userId[mySym]); //$$$
