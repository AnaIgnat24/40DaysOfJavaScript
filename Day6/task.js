console.log("Day 06");

//Task1 - Write a Function to Convert Celsius to Fahrenheit

function convert(celsius){
 let fahrenheit = (celsius * 9/5) + 32;
 console.log(fahrenheit);
}

convert(1);


//Task2 - Create a Function to Find the Maximum of Two Numbers

function findMax(num1, num2){
    if (num1 > num2){
        console.log(`${num1} is the highest number`)
    }else{
        console.log(`${num2} is the highest number`) 
    }
}

findMax(-1, -3);


//Task3 - Function to Check if a String is a Palindrome

function isPalindrome(str){
    let backStr = "";

    for (let i=str.length-1; i>=0; i--){
        backStr+=str.charAt(i);
    }
    
    if (str === backStr){
        console.log(`${str} is a palindrome`);
    }else{
        console.log(`${str} is not a palindrome`);
  }
}

isPalindrome("ana");
isPalindrome("claudiu");


//Task4 - Write a Function to Find Factorial of a Number

function factorial(n) {
    
    if(n <0) {
        return "Factorial is not defined for negative numbers";
    }else if(n===0){
        return 1;
    }
    
    let result = 1;
    for (let i=n; i>=1; i--){
        result *= i;
    }
    return result;
}

console.log(factorial(5));


//Task5 - Write a function to Count Vowels in a String

let counter = 0;
function countVowels(str){
    for (let i=0; i< str.length; i++){
        if (str.charAt(i) === "a" || str.charAt(i) === "e" || str.charAt(i) === "i" || str.charAt(i) === "o" || str.charAt(i) === "u" || str.charAt(i) === "A" || str.charAt(i) === "E" || str.charAt(i) === "I" || str.charAt(i) === "O" || str.charAt(i) === "U"){
            counter++;
        }
    }
    if (counter === 0){
        console.log("The word has no vowels!");
    }else{
        console.log(`The word has ${counter} vowels!`);
    }
}

countVowels("aeiou");

//Task6 - Write a Function to Capitalize the First Letter of Each Word in a Sentence

function capitalizeWords(sentence){
    let upSentence = "";
    let blank = "";
    //algorithm is created based on single space of a sentence; but it's not the proper solution as user can write their own way. there may be multiple space, tab etc.
    upSentence = upSentence.concat(sentence[0].toUpperCase());
    for(let j=1; sentence.length>j; j++){
        if(sentence[j] === " "){
            upSentence = upSentence.concat(sentence[j]);
            blank = "yes";
        }else{
            if(blank === "yes"){
                upSentence = upSentence.concat(sentence[j].toUpperCase());
                blank = "";
            }else{
                upSentence = upSentence.concat(sentence[j]);
            }
        }
    }
    return upSentence;
}

let capWord = "sofia este minunata";
console.log("Input:",capWord);
console.log("Capitalized Sentence:",capitalizeWords(capWord));


//Task7 - Use an IIFE to Print “Hello, JavaScript!”

(function(word){
    console.log(`"Hello, ${word}!"`)
})("JavaScript")

//Task8 - Create a Simple Callback Function

function greet(personName, callback){
    callback(personName);
}

let personName = "Ana";
personName = "Sofia";
personName = "Claudiu";

greet(personName, function(personName){
    console.log("Welcome to our resort,", personName);
   });


//Task9 - Create Call Stack Execution Diagram for this flow

/*function f1(){}
function f2(){
    f1();
}
f2();

The first one that gets in the stack is f2(),  that contains f1(), which gets executed and gets out of the stack. The last one that gets out of the stack is f2().*/



//Task10 - Create Call Stack Execution Diagram for this flow

/*function f1(){}
function f2(){}
function f3(){
    f1();
}
f2();
f3();
f1();

The first one that gets in the stack is f2(), is executed and gets out.
In it's place comes f3() that contains f1(), which gets executed and gets out of the stack. The last one that gets out of the stack is f3().*/




