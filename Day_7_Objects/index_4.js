// Day_7: Objects

// Activity_4: The this Keyword 
// Task_7



let book_Obect =    {
    title: 'Dune',
    author: 'Frank Herbert',
    year : 1965,
    result(){
        return `Tittle of book: ${this.title}, Auther name: ${this.author} and Year: ${this.year}`
    }
        }

    console.log(book_Obect.result());
    