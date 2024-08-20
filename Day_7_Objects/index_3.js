// Day_7: Objects

// Activity_3: Nested Object 
// Task_5


let library ={
            
    nAMe: "Science_library",
    books:  [
        {
            title: 'Dune',
            author: 'Frank Herbert',
            year : 1965
        },
        {
            title: 'The Time Machine',
            author: 'H.G. Wells',
            year : 1895
        },
        {
            title: 'Brave New World',
            author: 'Aldous Huxley',
            year : 1932
        },
        {
            title: 'The Forever War',
            author: 'Joe Haldeman',
            year : 1974
        },
        {
            title: 'Snow Crash',
            author: 'Neal Stephenson',
            year : 1992
        },
    ]

}

// console.log(library);

// Task_6


console.log(library.nAMe);

library.books.forEach(allBook => {
    console.log(` Tittle: ${allBook.title}, Auther: ${allBook.author} and Year: ${allBook.year}`);
    
});





















