// // Activity #5: Combining Condition

// // Task #7


// let Year = 500
// if (Year % 4 == 0){
//     if(Year % 100 != 0){
//         console.log("Is a leap year");
//     }else if(Year % 400 != 0){
//         console.log("Is a leap years");
//     }else {
//         console.log("is not leap years");

//     }
// }else {
//     console.log("is not leap year");
    
// }

let year = 2024
// let leapYear

if (year%4==0) {
    if (year%100==0) {
        if (year%400 ==0) {
            leapYear = true
        }
        leapYear = false
    }
    leapYear = true
}
else{
    leapYear = false
}

if (leapYear) {
    console.log(`${year} is Leap Year`)
}
else{
    console.log(`${year} is not Leap Year`)
}