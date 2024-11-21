/*(1)Stack Memory :-
 * for primitive dataTyes,changes are done in copy, original not changed.
 * (2)Heap Memory:-
 * for non primitive dataTypes,changes are done in original reference(not copy),orginal is changed!*/
let myYt = "aditi@yt.com";
let otherYt = myYt;

otherYt = "aditi123@yt.com";
console.log(myYt); //aditi@yt.com
console.log(otherYt); //aditi123@yt.com

let user1 = {
  email: "abc@email.com",
  upi: "xyz@upi.com",
};

let user2 = user1;
user2.email = "abc121@email.com";
user2.upi = "xyz121@gmail.com";

console.log(user1, user2); //{email:abc121@email.com, upi : xyz121@gmail.com},{email:abc121@email.com,upi : xyz121@gmail.com} ie both are same!
