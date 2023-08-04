const data = [
    {
        id: 1,
        title: "The Lord of the Rings",
        publicationDate: "1954-07-29",
        author: "J. R. R. Tolkien",
        genres: [
            "fantasy",
            "high-fantasy",
            "adventure",
            "fiction",
            "novels",
            "literature",
        ],
        hasMovieAdaptation: true,
        pages: 1216,
        translations: {
            spanish: "El señor de los anillos",
            chinese: "魔戒",
            french: "Le Seigneur des anneaux",
        },
        reviews: {
            goodreads: {
                rating: 4.52,
                ratingsCount: 630994,
                reviewsCount: 13417,
            },
            librarything: {
                rating: 0,
                ratingsCount: 47166,
                reviewsCount: 452,
            },
        },
    },
    {
        id: 2,
        title: "The Cyberiad",
        publicationDate: "1965-01-01",
        author: "Stanislaw Lem",
        genres: [
            "science fiction",
            "humor",
            "speculative fiction",
            "short stories",
            "fantasy",
        ],
        hasMovieAdaptation: false,
        pages: 295,
        translations: {},
        reviews: {
            goodreads: {
                rating: 4.16,
                ratingsCount: 11663,
                reviewsCount: 812,
            },
            librarything: {
                rating: 4.13,
                ratingsCount: 2434,
                reviewsCount: 0,
            },
        },
    },
    {
        id: 3,
        title: "Dune",
        publicationDate: "1965-01-01",
        author: "Frank Herbert",
        genres: ["science fiction", "novel", "adventure"],
        hasMovieAdaptation: true,
        pages: 658,
        translations: {
            spanish: "",
        },
        reviews: {
            goodreads: {
                rating: 4.25,
                ratingsCount: 1142893,
                reviewsCount: 49701,
            },
        },
    },
    {
        id: 4,
        title: "Harry Potter and the Philosopher's Stone",
        publicationDate: "1997-06-26",
        author: "J. K. Rowling",
        genres: ["fantasy", "adventure"],
        hasMovieAdaptation: true,
        pages: 223,
        translations: {
            spanish: "Harry Potter y la piedra filosofal",
            korean: "해리 포터와 마법사의 돌",
            bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
            portuguese: "Harry Potter e a Pedra Filosofal",
        },
        reviews: {
            goodreads: {
                rating: 4.47,
                ratingsCount: 8910059,
                reviewsCount: 140625,
            },
            librarything: {
                rating: 4.29,
                ratingsCount: 120941,
                reviewsCount: 1960,
            },
        },
    },
    {
        id: 5,
        title: "A Game of Thrones",
        publicationDate: "1996-08-01",
        author: "George R. R. Martin",
        genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
        hasMovieAdaptation: true,
        pages: 835,
        translations: {
            korean: "왕좌의 게임",
            polish: "Gra o tron",
            portuguese: "A Guerra dos Tronos",
            spanish: "Juego de tronos",
        },
        reviews: {
            goodreads: {
                rating: 4.44,
                ratingsCount: 2295233,
                reviewsCount: 59058,
            },
            librarything: {
                rating: 4.36,
                ratingsCount: 38358,
                reviewsCount: 1095,
            },
        },
    },
];

function getBooks() {
    return data;
}

function getBook(id) {
    return data.find((d) => d.id === id);
}


//DESTRUCTURING
// const books = getBooks()

//suppose we want to get title and author of book 

const book = getBook(1)
// const title = book.title
// const author = book.author
// title
// author

//now reading data from book object can be cumbursome so thats why we have object destructing 
const { title, author, genres, pages, publicationDate } = book
console.log(title, author, genres, pages)

//   suppose we want to sort genres then

//ARRAY DESTRUCTURING example
// const primaryGenre = genres[0] 
// const secondaryGenre = genres[1]

// const [primaryGenre, secondaryGenre] = genres
// console.log(primaryGenre, secondaryGenre)

//REST OPERATOR
const [primaryGenre, secondaryGenre, ...otherGenres] = genres
console.log(primaryGenre, ...otherGenres)

//SPREAD OPERATOR
//same syntax is use for spread operator 
//suppose we want to create a new array with all genres with new one at the end 
const newGenres = [genres, "epic fantasy"]
console.log(newGenres)
//but this is not what we want ... epic fantasy is outside the array 
//so what we we can do is to use spread operator 
const newGenresSpred = [...genres, "epic fantasy"]
console.log(newGenresSpred)
//till here we saw in case of ARRAY


// now we move to objects wheere spread operartor is even more important and update the existing ones
//adding a new property
const updatedBook = { ...book, moviePublicationDate: "2024-01-01" }
updatedBook


//updating the new property
//we can also update the pages for id 1 
const updatePage = { ...book, pages: 1210 }
updatePage



///Template Literals 

const summary = `${title} is a book and the is  ${author} and publication date is ${publicationDate.split("-")[0]}`
console.log(summary)


//ternary operator 
const pagesRange = pages > 1000 ? "over a thousand" : "less than thousand";
pagesRange;

//Arrow Functions examples

//Function declation
function getYear(str) {
    return str.split("-")[0];
}
console.log(getYear(publicationDate))

//or  using Arrow function --->>
//Function express since we are storing in a variable

// const getYearArrow = (str) => str.split("-")[0]
//but if we give {} we need to write return else it will give undefined 
const getYearArrow = (str) => {
    return str.split("-")[0]  // return keyword is mandatory
}
console.log(getYearArrow(publicationDate))


//short circuting and logical operator && || ??
console.log(true && "some string") //short circuit will not work
console.log(false && "some string") // since it doesnot goes to other value thus short circuit
//TRUTHY values which means that is not a falsy value 
//FALSEy VALUES = "0", null, undefined 
console.log("ranjan" && " some string")
console.log(0 && "ranjan") // this is short circuit and a false value 

console.log(book.reviews.librarything.rating)
const countWrong = book.reviews.librarything.rating || "no data"
countWrong  // this is wrong as the value is 0 
// to overcome this issue javascript has added nullish coalising 

const count = book.reviews.librarything.rating ?? "no data"
count


// OPTIONAL CHAINING (?)
//do this  to be on a safer side beacuse we dont know if data is present or not if its undefined the code will break
function getTotalReviewCount(book) {
    const goodReads = book.reviews?.goodreads?.reviewsCount
    const libraryThing = book.reviews.librarything?.reviewsCount ?? 0  //added zero because it will give NaN 
    libraryThing //if librarything is undefined then we can use optional chaining and nullish coalcing and set the value to 0
    return goodReads + libraryThing


}
console.log(getTotalReviewCount(book))

//Array MAP Method
data //is an array
// const book = getBook(1)
book // is an object find method is used here 

const x = [1, 2, 3, 4, 5].map((el) => el * 2)
x


const titles = data.map((d) => d.title)
titles


const essentialData = data.map((d) => {
    return {
        title: d.title,
        author: d.author,
        reviewsCount: getTotalReviewCount(book)
    }
})
essentialData

//Array filter method

// const books = getBooks()
// books
const longBooks = data.filter((d) => d.pages > 400).filter((d) => d.hasMovieAdaptation)
longBooks


const adventureBooks = data.filter((books) => { return books.genres.includes("adventure") }).map((d) => d.title)
console.log(adventureBooks)


//Array REDUCE METHOD - very powerful but not easy 
//bascially to reduce value to one number 
// here number of pages of all the book comibned
// ques --- what is accumulator doing ? use of acc? 
//acc is just pile where we keep adding the number of pages and giving the total value 
const pagesAllBooks = data.reduce((acc, book) => acc + book.pages, 0) // we can replace acc with sum 
pagesAllBooks


//Array sort Method
// bascially the value is sorted in asending way 
const arr = [3, 5, 6, 7, 5, 1]
const sorted = arr.sort((a, b) => a - b) // we can also do b -a
sorted
arr
// if we see that now arr is also sorted automatically 
// we also saw that original array got changed which is mutable and its not a good idea from frontend concept 
// before doing so we can do like this to avoid mutability 
const correctWay = arr.slice().sort((a, b) => a - b)
arr
// the value will be [3,5,6,7,5,1] comment out the above sorted code 
// with the help of slice our arr was not mutable 

const sortPages = data.slice().sort((a, b) => b.pages - a.pages)
sortPages


//Working with immutable array(very important)
// in react many operations need to be immutable ie how to add delete and update without mutatating the value or 
// without changing the array 
// 1) ADD a book object to the array 
const newBook = {
    id: 6,
    title: "harry porter and the chamber of secrets",
    author: "JK Rowling"
}
const booksAfterAdd = [...data, newBook]   //spread the old one and add new one in case of addition
booksAfterAdd

// 2) DELETE the book from an array 
//always create new array so that original array is not mutatated
const bookAfterDelete = booksAfterAdd.filter((data) => data.id !== 3)
bookAfterDelete
//here manually deleted 3 we could just write a function and we could pass the id in that function 
//  so final code would be (data.id !== id)

//3) UPDATE the book object in an array 
// we use map method and we use spread operator i.e taking old array value and adding new one to the selected array here 1

const bookAfterUpdate = bookAfterDelete.map((data) => data.id === 1 ? { ...data, pages: 1210 } : data)
bookAfterUpdate

// ---------------------------------- -----------------------------------------------------------------------------------


// ASYNCHRONOUS JAVASCRIPT 

// fetch("https://jsonplaceholder.typicode.com/todos");
// console.log("ranjan")

//javascript will not wait it will execute the function(fetch) and it will move on to next line of code here   console.log
// now the question is how we can wait and do something as soon as the data arrives
// well this place asynchronous javascript techniques comes into play
//  so this fetch function what returns  is called promise



// fetch("https://jsonplaceholder.typicode.com/todos")
// .then(res =>res.json())
// .then(data=>console.log(data))
// console.log("ranjan")

//async await 
//doing in a cleaner way 
async function getTodos() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos")
    const data = res.json
    console.log(data)

}
const todos = getTodos()
console.log(todos)
// by default the javascript moves on to the next line and doesnot wait for anyone
//now with async function javascript will not move to the next line
// and await keyword will work inside async function