// Day_8

// Activity_5: Enhanced Object Literals

// Task_8


let obj = {
    nme: "Ali Jan",
    age: 22,
    city: "Karachi",
    
    Method() {
        return (`My name is ${this.nme} and i m ${this.age} year old.`);
    }
}

console.log(obj.Method());



// Task_9


let key1 = 'first' 
let key2 = 'middle' 
let key3 = 'last' 


let objects = {
    [key1]: "javaScript",
    [key2]: "HTML",
    [key3]: "chai our code",
    result(){
        return `I am learning ${this[key1]}, ${this[key2]} and ${this[key3]}`
    }
}


        console.log(objects.result());
        

