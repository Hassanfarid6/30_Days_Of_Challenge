// Day_7: Objects

// Activity_5: Object iteration

// Task_8


// Simple object with key-value pairs
let book = {
    title: 'The Forever War',
    author: 'Joe Haldeman',
    year : 1974
}


for (let key in book){
    console.log(`${key} : ${book[key]}`);
    
}

// for (const property in book) {
//     console.log(`${property}: ${book[property]}`);
//   }



  
  // * Task 9
  
  console.log(`Keys: ${Object.keys(book)}`)
  console.log(`Values: ${Object.values(book)}`)







