//Task 1 - Odd or even?

let number = 5;

if (number % 2 === 0){
  console.log(`Number ${number} is an even number`)
} else{
  console.log(`Number ${number} is an odd number`); 
}


//Task 2 - Do you have a driving license?

let age = 38;

age >= 18 ? console.log(`${age} is an eligible age for a driving license!`) : console.log(`${age} is not an eligible age for a driving license!`);


//Task 3 - Calculate CTC with a Bonus

let monthlySalary = 12300;
let annualSalary = monthlySalary * 12 + 20/100 * monthlySalary * 12;

console.log (`You make ${annualSalary} rupees per annum as a CTC`);


//Task 4 - Write a program for the Traffic Light Simulation

let color = 'red';
color = 'green';

color === 'red'? console.log(`STOP! The color is ${color}!`) : color === 'green'? console.log(`GO! The color is ${color}!`) : console.log(`Wait for the color to turn either red or green`);

//Task5 - Create an Electricity Bill Calculator

let units = 100;
let monthlyBill = units * 150 * 30;
let annualPayment = (monthlyBill * 12) - (20/100 * monthlyBill * 12);

console.log(`You have to pay ${annualPayment} per year for electricity!`);

//Task6 - Leap year checker

let year = 2025;

year % 4 === 0? console.log(`${year} is a leap year!`) : console.log(`${year} is not a leap year!`);


//Task7 - Max of Three Numbers

let p = 9;
let q = 17;
let r = 27;

if (p > q && p > r){
  console.log(`${p} is the max number!`);
}else if (q > p && q > r){
  console.log(`${q} is the max number!`);
}else{
  console.log(`${r} is the max number!`);
}
  
//Task8 - Biwise Doubling

let count = 5;

console.log(`1010 << 1 = 0*(2**0) + 1*(2**1) + 0*(2**2) + 1*(2**3) = 10`);


