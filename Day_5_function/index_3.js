
// Day_5_Function


// Activity #3 Arrow Function 

// Task #5


let sum = (num1, num2)=> {

    return num1 + num2
}

let result = sum(8 , 5)

// console.log(result);





// Task #6


let arr = (name1)=>{
            
    if(name1 === "Ali"){
        return true
    }else{
        return false
    }
}

let ress = arr("Ali")
// console.log(ress);


const containsSpecialCharacter = (str) => {
    const specialCharacters = /[!@#$%^&*(),.?":{}|<>]/g;
    return specialCharacters.test(str);
};

console.log(containsSpecialCharacter("Hello, World!")); 
console.log(containsSpecialCharacter("HelloWorld"));    

