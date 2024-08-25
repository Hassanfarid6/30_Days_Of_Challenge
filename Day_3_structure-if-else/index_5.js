// // Activity #5: Combining Condition

// // Task #7

let year = 2018
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