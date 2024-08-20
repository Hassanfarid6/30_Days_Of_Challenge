// Day_7: Objects

// Activity_1: Object Methods


// Task_3

let books = {
    tittle: "My_Book_About_Nation",
    auther: "Ali_Jan",
    year: "2014",

    method(){
        return `${this.tittle} is made by ${this.auther}`
    },

}

let res = books.method()
console.log(res);



// Task_4

let books1 = {
    tittle: "My_Book_About_Nation",
    auther: "Ali_Jan",
    year: "2014",


    update(year){
        return this.year = year
    }
}



let res1 = books1.update("2018")

console.log(`Updated year ${res1}`);
