/*====CONVERSIONS=====>
convert this string into number ex-1???"
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
 * "" is a falsy Value!!!!== 0 in boolean
 * typeof all dataTypes will be number but variables = Number() will have above value!
 * Boolean()
 * String()
 */
/**====== Operations =====
 *-==========Basic Operators=== (airhmatic operators)========>
  add(+)
 subtract(-)
 multiply(*)
 divide(/)
 modulus(%) = remainder
 exponent(**)
 * Adding strings(basic)===>
  let str1 = "aditi";
let str2 = " pathak";
console.log(str1 + str2);// "aditi pathak"
* Adding Strings(advance)===>
(1)when string is at 1st! then other numbers are treated as string  {str + num}
(2)when string is at last , prev operators are converted   {str + num}
console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); //32
(3)
console.log(true);//true
console.log(+true);//1
console.log(+"") // 0
console.log(+" ") // 0
(4)Increment Opreator (++) (prefix:adds on log vs suffix : adds after log)

let gameCounter = 100;
console.log(gameCounter); //100
console.log(gameCounter++); //100 post fix increment changes the value after the log! thus! rn = 100
console.log(++gameCounter); //now gc == 101 (post fix increment) thus 102 (prefix)
(5)VIP
let x = 3;
let y = ++x;
console.log(x,y)//4,4;



=======comparision operators=== THESE below conversions are diff for ==, >,< thus!!!
/*null and 0 === all false expect(!=,!==,>=.<=)*/
console.log(null > 0);
console.log(null < 0);
console.log(null >= 0); //true
console.log(null <= 0); // true
console.log(null == 0);
console.log(null === 0);
console.log(null !== 0); //true
console.log(null != 0); //true
//Undefined and 0 all false, expect(!=,!==)
console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined >= 0);
console.log(undefined <= 0);
console.log(undefined == 0);
console.log(undefined == 0);
console.log(undefined != 0); //true
console.log(undefined !== 0); //true
//null and undefined
console.log(null == undefined); //true loosely equal
console.log(null === undefined); //false not strictly equal
