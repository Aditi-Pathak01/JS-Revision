/*convert this string into number ex-1???"
let score = "33"; // string
let scoreNum = Number(score);
console.log(typeof scoreNum)//number

convert this string into number ex-2???"
let score2 = "33abc";
console.log(typeof score2); //string
let score2Num = Number(score2);
console.log(score2Num);//NaN === not a number!


let score3 = null;
let score3Num = Number(score3);
console.log(score3Num); //0

let score4 = undefined;
let score4Num = Number(score4);
console.log(score4Num);//NaN

let score5 = true;
let score6 = false;
let score5Num = Number(score5);
let score6Num = Number(score6);
console.log(score5Num); //1
console.log(score6Num); //0
*/
/**
 * "33" ==> 33   
 * "33abc" ==>NaN
 * null ==> 0
 * undefined ==> NaN
 * true ==> 1
 * false ==> 0
 * "" is a falsy Value!!!!
 * typeof all dataTypes will be number but variables will have above value!
*/