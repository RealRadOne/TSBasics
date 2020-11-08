let count=5;
/*count=a;
Can compile w/valid JS
Typecasting not allowed in TS
*/
let a;
/*Now any type can be assigned */
let b: number;
/*Unchangeable type now */
let e: number[] = [1,2,3];
let f: any[] = [1,true,'a',false];

const colRed =0;
/*Enum now */

enum color {Red,Green,Blue}
/*
Values initially set incrementally
*/
let bkcol = color.Blue;
