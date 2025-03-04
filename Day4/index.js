console.log('Day 04');

//Task1 - What will be the output of this code snippet and why?

let day = "Monday";

switch (day) {
   case "monday":
       console.log("It's the start of the week.");
       break;
   default:
       console.log("It's a normal day.");
}
// The output is "It's a normal day", because there is a difference in wring monday. When assigning the variable is written a capital and when using cases is in smallcase.


//Task2 - Build an ATM Cash Withdrawal System

let amount = 200;
if (amount % 100 === 0){
    console.log("Withdraw successful!");
}else{
    console.log("Invalid amount!");
}


//Task3 - Build a Calculator with switch-case

let operator = "%";
let num1 = 2;
let num2 = 4;
let result;

switch(operator){
    case "+" : console.log(result = num1 + num2);
    break;
    case "-" : console.log(result = num1 - num2);
    break;
    case "*" : console.log(result = num1 * num2);
    break;
    case "/" : console.log(result = num1 / num2);
    break;
    case "%" : console.log(result = num1 /100 * num2);
    break;
    default: console.log("Not valid;");
}


//Task4 - Build a Calculator with switch-case

let age = 70;

if (age < 18){
    console.log("The price of the ticket is 3$");
}else if(age >= 18 && age < 60){
    console.log("The price of the ticket is 10$");
}else{
    console.log("The price of the ticket is 8$");
}


//Task5 - Horoscope Sign Checker

let month = "July";

switch(month){
    case "January": 
    case "February":
    console.log("The zodiac sign is Aquarius");
    break;
    case "March": 
    case "April":
    console.log("The zodiac sign is Aries");
    break;
    case "May": 
    case "June":
    console.log("The zodiac sign is Taurus");
    break;
    case "July": 
    case "August":
    console.log("The zodiac sign is Gemini");
    break;
    case "September": 
    case "October":
    console.log("The zodiac sign is Cancer");
    break;
    case "November": 
    case "December":
    console.log("The zodiac sign is Leo");
    break;
    default: console.log("Not a valid month!");
}


//Task6 - Which Triangle?

let side1 = 2;
let side2 = 3;
let side3 = 2;

if (side1 === side2 && side2 === side3){
    console.log("This is an Equilateral Triangle!");
}else if (side1 === side2 || side1 === side3 || side2 === side3){
    console.log("This is an Isosceles Triangle!");
}else if (side1 != side2 && side2 != side3 && side1 != side3){
    console.log("This is a Scalene Triangle!");
}