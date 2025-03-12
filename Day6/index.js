console.log("Day 06");

function printThis(){
    console.log("Printing...");
}

printThis();

let printMe = function (){
    console.log("Print Me");
}

printMe();



function sum (a, b){
   const result = a + b;
   //console.log(result);
   return result;
}

let result = sum(10, 9);
function double(x){
    return 2*x;
}

console.log(double(result));


//Default parameters

function calc(a, b=0){
    return (2 * (a + b));
}
const resVar = calc(2,3);
console.log(resVar);


//Rest parameters

function calculateThis(x, y, ...rest){
 console.log(x, y, rest)
}

calculateThis(1,2,3,4,5,6,7,8,9)

//Nested functions

function outer(){
    console.log("Outer");

    return function inner(){
        console.log("Inner");
    }

}

let retFunc = outer();

console.log(retFunc())


//Callback function

const toCallBuz = false;

function foo(func){
    console.log("foo");
    if (toCallBuz){
       func();
    }
}

/*const buz = function(){
console.log("buz");
}*/

foo(function(){
    console.log("buz");
})


//Pure function

let  greetingMsg = "Hello ";
function greeting(name){
    return greetingMsg + name;
}

console.log(greeting("tapascript"));
console.log(greeting("tapascript"));
console.log(greeting("tapascript"));

greetingMsg = "Namaste ";
console.log(greeting("tapascript"));
console.log(greeting("tapascript"));
console.log(greeting("tapascript"));


//Higher order function

function getCamera(camera){
    camera();
}

getCamera(function(){
    console.log("Sony");
})

function returnFunc(){
    return function(){
        console.log("Hello");
    }
}

const retFun = returnFunc();
retFun();


//Arrow function

let greetMe = ()=> {
    console.log("Hola");
}

greetMe();

let greetMe1 = (greetingMsg) => greetingMsg ;


console.log(greetMe1("Namaste"));