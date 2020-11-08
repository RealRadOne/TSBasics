var count = 5;
/*count=a;
Can compile w/valid JS
Typecasting not allowed in TS
*/
var a;
/*Now any type can be assigned */
var b;
/*Unchangeable type now */
var e = [1, 2, 3];
var f = [1, true, 'a', false];
var colRed = 0;
/*Enum now */
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["Green"] = 1] = "Green";
    color[color["Blue"] = 2] = "Blue";
})(color || (color = {}));
/*
Values initially set incrementally
*/
var bkcol = color.Blue;
