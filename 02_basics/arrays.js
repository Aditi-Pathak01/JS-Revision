/*Arrays:-
(1)SYNTAX (4)
(i) denoted by square brackets []
(ii) each value is called element [1,2] which are seperated by ,
(iii) elements can have different dataTypes [1,2,"aditi",true]
(iv) let myArr2 = new Array (1,2,3,4,5)
(2)Defination (2)
Collection Of multiple Items in a single variable
type of = object
(3)How to excess and change the values of arr  and string ??? myArr[idx] excess & changed / myStr[0],notchanged only excessed ie 0 based indexing
(4)Copy Operations in Array == shallow copy! :-shallow copy of an object  is a copy whose properties share the same references (point to the same underlying values)! ie, changes will be done in origial array 
(5)Properties of array :- index and length
(6)Methods in array



//(1)syntax , (3)excess and change!
let myArr = [1, 2, 3, true, "Aditi"];
console.log(myArr[0]); //1 {excess}
myArr[0] = 0;
console.log(myArr); // {changed}
console.log(myArr[0]); //0

let str = "aditi";
console.log(str[0]); //a, {excess}
str[0] = "b"; //{not changed}
console.log(str[0]); //a why ?? (1)STRINGS ARE IMMUTABLE IN JS, arrays are mutable!;(2)strings are stored by value(stack) ,  arrays are stored by reference(heap);
console.log(str.replace("a", "A")); //Aditi (new strring created)
//(4)Copy Operations :-
let myArr2 = myArr; //shallow copy created ie,any changes in myArr2 will change the original myArr(shallow copy-same reference)
myArr2[0] = "one";
console.log(myArr, myArr2);
//(5)Properties of array :- index and length
let newArr = new Array("one", "two", "three", "four");
console.log(newArr);
console.log(newArr[1]); //"tw0"
console.log(newArr.length); //"4" */
let newArr = new Array("one", "two", "three", "four");
console.log(newArr);
console.log(newArr[1]); //"tw0"
console.log(newArr.length); //"4"

//(6)Methods in Array :-
//(I)
//(1)push :- adds element at end of the array! syntax :- arr.push("element")
newArr.push("five");
console.log(newArr); //five added
//(2) :-pop :- removes last element of the array :- syntax :- arr.pop()
newArr.pop();
console.log(newArr); // five removed
//(II)
//(3)Unshift :-  adds element at the starting of the array :- syntax :- arr.unshift(element) //not used much because whole array indexing is changed
newArr.unshift("zero");
console.log(newArr); // zero added in the beginning of the arrray [at 0th index]
//(4)shift :-
newArr.shift(); // used to remove elements from the starting of the array [0 index ]
console.log(newArr);
//(III)questionare methods :- arr.includes() and arr.indexOf()
let myArr2 = [1, 2, 3, 4, 5, 6];
console.log(myArr2.includes(9)); //false
console.log(myArr2.indexOf(6)); //5
console.log(myArr2.indexOf(9)); //-1
//(IV)how to convert Array into string ? .join() and .toString()
let array = [1, 2, 3, 4, 5, 6];
let myStr = array.join();
let myStr2 = array.toString();

console.log(array); //[1,2,3,4,5,6]
console.log(myStr); //1,2,3,4,5,6
console.log(myStr2); // 1,2,3,4,6
console.log(typeof array); //object
console.log(typeof myStr); // string
console.log(typeof myStr2); //string

//(V)slice and splice
//(i)slice doesnt change the original array ,ie returns a new array ,slice(strIdx,endIdx) , end idx is excluded .
console.log(array.slice(1, 3));
console.log(array); //unchanged
//(ii) splice(strtIdx,delCount,newEl)
console.log(array.splice(0, 1, 0));
console.log(array); //whole original array changed (IQ)

//(VI)concat and spread operator
//(1) concat :- returns a new array
let arr1 = [0, 1, 2, 3, 4];
let arr2 = [5, 6, 7, 8, 9];
let arr3 = arr1.concat(arr2);
console.log(arr3);
//(2)Spread Operator [...arr]
let arr4 = [...arr1, ...arr2];
console.log(arr4);
//(VIII)Complex Arrays :- into simple array :- Array.flat(Infinity)
let comArr = [1, 2, 3, [4, 5, 6], 7, [8, [9, 10]]];
let simpleArray = comArr.flat(Infinity);
console.log(simpleArray);
//(ix) is Array or not ? Array.isArray(arrName)
console.log(Array.isArray(simpleArray)); //true return boolean
//(x) Any Ds into  Array  ?//Array.from()
let myName = "Aditi Pathak";
let myNameArr = Array.from(myName);
console.log(myNameArr);
//Object cannot be converted to array DIRECTLY :- RETURNS EMPTY ARRAY(IQ)
let obj = {
  name: "Aditi Pathak",
  age: 26,
  place: "Blr",
};
let myObjArr = Array.from(Object.keys(obj));
/*{this creates arr from keys of the object:-[name,age,place]
::: Object.values(obj) will create object from values of the object["Aditi Pathak",26,blr]}
:::Object.entries(obj) will create complex array!*/
console.log(myObjArr);
//(XI)Array.of(set of elements)
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));
