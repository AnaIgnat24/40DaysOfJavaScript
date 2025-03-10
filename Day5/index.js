 console.log('Day 05');

/*for (let count=1; count<=5; count++){
    console.log("Iteration/Loop", count);
}
 

let sum = 0;
for (i = 1; i <= 100; i++){
    if (i % 2 === 0){
      sum += i;   
    }  
}
console.log("Sum is", sum);


let language = "JavaScript";
for (let i=0; i< language.length; i++){
    console.log(language.charAt(i));
}


// Nested for loops

for (let i=1; i<=3; i++){
    for (let j=1; j<=3; j++){
        console.log("Row", i, "Col", j)
    }
}


//Break and continue

for (let i=1; i<=5; i++){
    if (i===3) break;
    console.log(i);
}


for (let i=1; i<=5  ;i++){
    if (i===3) continue;
    console.log(i);
}


//Multiple counters for single loop

for (let i=1, j=10; i<=10 && j>=1; i++,j--){
    console.log(i,j)
}


//While loop

let counter =1;
while (counter <= 5){
 console.log(counter);
 counter++;
}


//Do while loop

let number=1;
do{
    console.log(number);
    number++;
}while(number<=5);*/





//Task1 - Generate a Pyramid Pattern using Nested Loop as it is shown below
/*  *
    **
    ***
    ****
    *****   */

for (let row = 1; row <= 5; row++){
    let sum = "*";
    for (let col = 1; col < row; col++){
        sum+= "*";
    }
    console.log(sum);
}


//Task2 - Create Multiplication Table (Using for loop)

for (let firstNum = 1; firstNum <= 10; firstNum++){
    let result;
    for (let secNum = 1; secNum <= 10; secNum++){
       if (firstNum  === 3){
          result = firstNum * secNum;
          console.log (`${firstNum} x ${secNum} = ${result}`)
        }
    }
}


//Task3 - Find the summation of all odd numbers between 1 to 500 and print them on teh console log.

let sum = 0;
for (let num = 1; num <= 500; num++){
    if (num % 2 !== 0){
        sum += num;
    }
}
console.log ("Sum is", sum);


//Task4 - Skipping Multiples of 3

for (let num = 1; num <= 20; num++){
 if( num % 3 === 0) continue;
 console.log(num);
}


//Task5 - Reverse Digits of a Number (Using while loop)

let num = 6789;
let reverse = 0;
while(num > 0) {
    let digit = num % 10; // got the last digit 9.
    reverse = reverse * 10 + digit; // add 9 to the reverse
    num = Math.floor(num / 10); // Math.floor to get digits without decimal digit(678).
}
console.log(reverse);

// Task 6. Write your understanding on the differences between for, while, and do-while loop. Create their flow charts.

/** for loop : When we know that how many times a block of code will looping, in this condition we will use "for loop".
 === for loop Flow Chart: 
  Start > Initialize variable > check condition > if False(Terminate) > if True(Execute the output) > update the value;
    then again, check condition > true(execute the output) > update the value..... continue the loop until FALSE(condition)
 */

/** while loop : When we don't know that, how many time the loop will be repeating, in this condition we will use "while loop".
 === while loop Flow Chart :
  Start > Initialize variable > check condition > if False(Terminate) > if True(Execute the output) > update the value(if needed);
  then again, check condition > Execute the output > update value.... continue the process
 */

/** do while loop : If we need to execute the output at-least once(before conditioning), we will use "do while loop".
 === do while Flow Chart : 
  Start > Initialize variable > execute the output > Update the variable > check condition > if False(Terminate) > if True(execute output).
   then again, update the value > check condition > execute output > continue the process
*/
