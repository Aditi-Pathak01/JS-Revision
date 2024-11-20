"use strict"; //treat all js code as newer version!
//alert(3+3); not work as we using node js, not browser
/**
 * DATATYPES ==== Primitive
 * (1) string
 * (2) Number
 * (3)bigInt for big numbers
 * (4)Boolean
 * (5)null :- rep of stand alone value, represents empty variable
 * (6)undefined:- variable is declared but not defined
 *
 */
let str = "abc";
let num = 1;
let x = true;
let y = false;
let a = null;
let b;
console.table([str, num, x, y, a, b]);
console.log([typeof str, typeof num, typeof x, typeof y, typeof a, typeof b]);
