
/*
//Task1 - Explain Temporal Dead Zone by creating 3 variables in side a block. Post the code as your answer.

TDZ - an area where you cannot access a variable until is initialized. If you try to access anything, you will get a reference error.

{
    // === first variable's TDZ started here / === second variable's TDZ started here / === third variable's TDZ started here
    //
    console.log("This is the second variable", second);
    //
    //
    console.log("This is the first variable", first);
    //
    //
    var second = 2;  === second variable's TDZ ended here
    //
    //
    let first = 1;  === first variable's TDZ ended here
    //
    //
    console.log("This is the first variable", third);
    //
    //
    let third = 3;  === third variable's TDZ ended here
    //
    //
}



//Task2 - Explain Variable and Function Hoisting with Example. Post the code as your answer.

Hoisting means creating memory for variables and for functions. Is variable hoisting and function hoisting.
Hoisting in JavaScript refers to the process where variable and function declarations are moved to the top of their containing scope during the compilation phase before the code is executed. 
This means you can use variables and functions before they appear in the code.

However, hoisting does not move the actual assignments (initialization), only the declarations.

Variable hoisting

console.log("this is ", myVar); 
var myVar = 10;
console.log("this is ",myVar);

GEC
CP:
myVar: undefined;
EP:
executes the first line of code (console.log("this is ", undefined))
myVar: 10;
executes the third line of code (console.log("this is ", 10)
   
   
   
Function hoisting 

greet(); // "Hello!"

function greet() {
  console.log("Hello!");
}

Function declarations are fully hoisted, meaning you can call greet() before defining it.
*/
  