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

