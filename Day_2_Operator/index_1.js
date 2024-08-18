

// // Day 2: Operator

// // Activity 1: ArithMetic Operations

// // Task 1 Write a program to add two numbers and log the result to the console
// let number1 = 4 + 2;
// console.log(number1);

// //Task 2 Write a program to subtract two numbers and log the result to the console
// let number2 = 4 - 2;
// console.log(number2);


// //Task 3 Write a program to Multiply two numbers and log the result to the console
// let number3 = 4 * 2;
// console.log(number3);

// //Task 4 Write a program to divide two numbers and log the result to the console
// let number4 = 4 / 2;
// console.log(number4);

// //Task 5 Write a program to remainder two numbers and log the result to the console
// let number5 = 5 % 2;
// console.log(number5);

// //Task6 use the += operator to add a number to a variable and log the result to the console
// let number6 = 2;
// number6 += 12;
// console.log(number6);


// //Task7 use the = operator to add a number to a variable and log the result to the console

// let number7 = 2;
// number6 -= 12;
// console.log(number6);

// //Task 8  write a program to compare two number using  > and < and log the result to the console


// let Class = 12;
// let student = 43;

// let check = Class > student;
// let check2 = Class < student;

// console.log(check);
// console.log(check2);


// //Task 9  //Task 8  write a program to compare two number using  >= and =< and log the result to the console


// let boy = 12;
// let girl = 43;

// let check3 = boy >= girl;
// let check4 = boy <= girl;

// console.log(check);
// console.log(check2);

// //task 4 write a program that use the ternary operator to check ia a number is positive a negative and log the result to the console

// let number = 10; 
// let result = number === 0 ? "Zero" : number > 0 ? "Positive" : "Negative";

// console.log(result);




//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ! Activity 1 : Arithmetic Operators

//* Task 1 
let a = 20
let b = 30
console.log(`Additon: ${a+b}`)

//* Task 2

let c = 30
let d = 10
console.log(`Subtraction: ${c-d}`)

//* Task 3

let e = 10
let f = 9
console.log(`Multiplication: ${e*f}`)

//* Task 4 

let g = 10
let h = 2
console.log(`Division: ${g/h}`)

//* Task 5

let i = 5
let j = 2
console.log(`Remainder: ${i%j}`)


// ! Activity 2: Assignment Operators

//* Task 6

// let a = 10;
a += 5;
console.log(`${a}`);

//* Task 7

// let b = 10;
b -= 5;
console.log(`${b}`);


// ! Activity 3: Comparison Operator

// * Task 8

// let a = 10;
// let b = 2;
console.log(a > b);
console.log(a < b);

// * Task 9

// let c = 15
// let d = 20
console.log(c >= d)
console.log(c <= d)

//* Task 10

// let e = 30
// let f = "30"
console.log(e == f) //? Loose Equality
console.log(e === f) //? Strick Equality

// !!! In Strick Equality the both data types need to be equal; eg: number and number
// !!! In Loose Equality only both data need equal; eg: 30 and "30"



// ! Activity 4: Logical Operators

//* Task 11

let userLoggedIn = true;
let hasAdminPrivileges = false;

if (userLoggedIn && hasAdminPrivileges) {
  console.log("Welcome, Admin! You have full access.");
} else {
  console.log("Access denied. Admin privileges are required.");
}

//* Task 12

let isWeekend = true;
let isHoliday = false;

if (isWeekend || isHoliday) {
  console.log("It's time to relax!");
} else {
  console.log("Keep Working hard!");
}


//* Task 13

let isopen = false

if (!isopen) {
    console.log('The store is closed')
} else {
    console.log('The store is open')
}



// ! Activity 5: Ternary Operator

//* Task 14 

let num = 10
let result = (num>0) ? "The number is Positive" : "The number is Negative"
console.log(result)




// ! Feature Request

//* Arithmetic Operator Script

let num1 = 10;
let num2 = 5;

console.log(`Addition: ${num1 + num2}`);
console.log(`Subtraction: ${num1 - num2}`);
console.log(`Multiplication: ${num1 * num2}`);
console.log(`Division: ${num1 / num2}`);
console.log(`Remainder: ${num1 % num2}`);


//* Comparison and Logical Script

let val1 = 8;
let val2 = 12;

//? for comparison

let isGreaterThan = val1 > val2;
let isLessThan = val1 < val2;
let isEqual = val1 == val2;
let isNotEqual = val1 != val2;

let orResult = isGreaterThan || isLessThan
let andResult = isGreaterThan && isLessThan
let notResult = !isEqual


// console.log(`Greater Than : ${isGreaterThan}`)
// console.log(`Less Than : ${isLessThan}`)
console.log(`Equal : ${isEqual}`)
console.log(`Not Equal : ${isNotEqual}`)

console.log(`Comparing with OR: ${orResult}`)
console.log(`Comparing with AND: ${andResult}`)
console.log(`Comparing with NOT: ${notResult}`)

//* Ternary Operator Script

// let num = 10
// let result = (num>0) ? "Number is Positive" : "Number is Negative"
console.log(result)

