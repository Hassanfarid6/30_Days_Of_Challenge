
// Day_5_Function


// Activity #5 Higher-Order Functions  

// Task #9



function CallManyTimefun(fun, num){

    for(let i = 1; i <= num; i++)
        fun()

}

function greeting(){
    console.log("Hello Dear ");
    
}

CallManyTimefun(greeting, 6);


// tASK #10 

function twofunc(func1, func2 , value){

    let multiply = func1(value)
    let squre = func2(multiply)
    return squre
}

function min(value){
   return value * 2
}   


function max(value){
    return value * value
}
console.log(twofunc(min, max, 5))



// ! Activity 5: Higher-Order Functions

// * Task 9

function callManyTimes(func, n) {

    for (let i = 0; i <n; i++) {
        func()
    }
    
}

function greet() {
    console.log("Hello!")
}

callManyTimes(greet,5)


// * Task 10

function applyFunction(func1, func2, value) {
    const result1 = func1(value)
    const findResult = func2(result1)
    return findResult
}

const double = (a)=>{
    return a * 2
}

const square = (a)=>{
    return a*a
}

const value = 5

const result = applyFunction(double, square, value)
console.log(result) 
//? Output: 100 (because double(5) = 10 and square(10) = 100)



// ! Feature Request

// * Even or Odd Script:

function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return `${num} is Even`
    } else {
        return `${num} is Odd`
    }
}
console.log(checkEvenOdd(5))
console.log(checkEvenOdd(10))

// * Square Calculation Script:

function square(num) {
    return num * num
}

console.log(square(5))

// * Concatention Function Script:

const concatStr = function(str1, str2) {
    return str1 + str2
}
console.log(concatStr("Namaste ", "Duniya!"))

// * Sum Calculation Arrow Function Script:

const calculateSum1 = (num1, num2)=>{
    return num1 + num2
}
console.log(calculateSum(5,10))

// * Higher-Order Function Script:

function callNTimes(func, n) {
    for (let i = 0; i < n; i++) {
        func();
    }
}

function greet() {
    console.log("Hello!");
}

callNTimes(greet, 5); 

