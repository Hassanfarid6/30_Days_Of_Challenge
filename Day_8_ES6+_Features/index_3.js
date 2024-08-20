// Day_8

// Activity_3: Spread and Rest oparator  

// Task_5

let arr = [1, 2, 3, 4, 5];
let newArr = [...arr, 6, 7, 8, 9, 10];

console.log(newArr);





// Task_6

function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
}


let result = sum(1, 2, 3, 4, 5);







