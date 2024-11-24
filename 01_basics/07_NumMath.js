/*How to write numbers? old way and new way!*/
const score = 100;
const balance = new Number(100);
//Type oF
console.log(score); //100 // typeof number
console.log(balance); // [Number : 100] and Number {100} // typeof Object
//Converting Number to string and using String methods and Properties
console.log(score.toString()); //100 but srting
console.log(balance.toString()); //100 but string

console.log(score.toString().length); //3
console.log(balance.toString().length); //3

//Number Properties(3)
//(1)tofixed(num) num=== number of 0 we want after decimals!
console.log(balance.toFixed(2)); //100.00
//(2)toPrecision(num) num=== no. of digits we want and including/excludin the decimal {roundoff}
const score2 = 23.89;
console.log(score2.toPrecision(3)); //23.9
console.log(score2.toPrecision(2)); //24

const score3 = 123.89;
console.log(score3.toPrecision(3)); //124
console.log(score3.toPrecision(4)); //123.9
console.log(score3.toPrecision(2)); //precise value + exponent
//(3)toLocaleString(`en-IN`)
const score4 = 1000000;
console.log(score4.toLocaleString(`en-IN`)); //commma acc to indian value
//(4)Max Value Min Value max safe integern! etc inJS can be Derived from direct Console Number.MAX_Value etc


/*========Math=======
(1)How To excess ? :- in consel :- Math  ,typeof  object
(2)Math Methods (8)
(i)Math.abs(-4) == converts negative value to positive value, but positive value remains same!
(ii)Math.round(5.76387) basic rounding off
(iii)Math.ceil(4.2) :- ceil means top value will be selected/5
(iv)Math.floor(4.2) :- floor means bottom value will be selected /4
(v)Math.min() :- used to find min value , in array also Math.min([...arr])
(vi)Math.max() :- used to find max value , in array also Math.max([...arr])
(vii)Math.random() gives random values b/w 0 to 1 (mostly decimal)
*/
console.log(Math.abs(-1)); //1
console.log(Math.round(5.8)); //6
console.log(Math.ceil(4.2)); //5
console.log(Math.floor(4.2)); //4
console.log(Math.min(1, 24, 4, 0)); //0
console.log(Math.max(1, 24, 4, 0)); //24

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(Math.min(...arr)); //1
console.log(Math.max(...arr)); //10

console.log(Math.random()); //range[0(inclusive),1(exclusive)]
console.log(Math.random() * 10); // decimal ,range [0(inclusive),10(exclusive)]
console.log(Math.random() * 10 + 1); // decimal,range [1(inclusive),11(exclusive)] , 0 avoided

//Generic(viii)
const max = 20;
const min = 10;
console.log(Math.floor(Math.random() * (max - min + 1) + min)); //



