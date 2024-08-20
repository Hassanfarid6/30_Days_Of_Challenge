
// Day_6: Arrays 

// Activity #3: Array Methods (Intermediate)

// Task #7


let arr = [1, 2, 3, 4, 5]
let res = arr.map(arr => arr * 2)

console.log(res);


// Task #8


let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
let res1 = arr1.filter(arr1 => arr1 %2 == 0)
 
console.log(res1);


// Task #9


let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
let res2 = arr2.reduce((val, sum) =>{
    return val + sum
},0)
 
console.log(res2);




