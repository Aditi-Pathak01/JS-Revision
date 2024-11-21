/**How to denote? :- ""/``
 * how to concatenate? let str2 = str1 + str2
 * how to add with numbers and other values? if string is at 1st the all others are treated as strings,if string is at last,before operations are converted
 * String Interpolation :- `abcdhsjashj${var}` placeholders and backTicks
 * Using new Key word? :-
 */
let myName = new String("aditi"); //string object is created
console.log(myName); // 2 outputs [String : "aditi"] and String {"aditi"}
console.log(typeof myName); //object

//PROPERTIES OF STRING
console.log(myName.length); //5
console.log(myName[0]); //a

//METHOIDS OF STRING(5*2)
//(1)tolowerCase,toUpperCase()
myName = myName.toUpperCase();
console.log(myName); //ADITI
console.log(myName[0]); //A
//(2)charAt(idx) , indexOf("char")
console.log(myName.charAt(0)); //A
console.log(myName.indexOf("D")); //1
//.(3)substring(startIDX,endIdx) :- cannot have -ve values
console.log(myName.substring(1, 4)); //DIT CUTS FROM START AND TILL BEFORE END IDX &&& Does'nt support -ve Indexing
//(3).slice(startIdx,endIdx) :-
//can have -ve values , -ve indexing starts from backwords (-1) ,
//rule :- startIdx <= EndIdx and Backward Slicing isnt allowed! ie,if strtiDX > eND iDX ===RETURN EMPTY STRING!
console.log(myName.slice(1, 4)); //DIT
console.log(myName.slice(-1, -2)); //ITI
//(4).trim() :- removes whitespaces and line terminators!
let myString = "    aditi    ";
console.log(myString); //     aditi
console.log(myString.trim()); // aditi
//(4).replace("what to replace","what to be replaced with")
let url = "https://aditi20%bhsjhdjkshdkj";
console.log(url.replace("20%", "-")); //https://aditi-bhsjhdjkshdkj
//(5).includes("char")//true/false :-asking a string it includes certain char or not
console.log(url.includes("aditi")); //true
//(5)split(seperator,limit) converts string  into an array otb /, or whitespace {seperator}
//limit is optional it denotes number of times string will be split,if we dont write limit,whole string will be split!
let myString2 = "dog cat ant";
let myArr = myString2.split(" ", 2);
console.log(myArr); //[dog,cat]
