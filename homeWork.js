let books = [
  {
    title: "Zero to One",
    author: "Blake MasterSouqs Peter Thiel ",
    "Number Of Pages": 320,
    isAvailable: true,
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    "Number Of Pages": 304,
    isAvailable: true,
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    "Number Of Pages": 320,
    isAvailable: false,
  },
  {
    title: "Ikigai",
    author: "Héctor García",
    "Number Of Pages": 200,
    isAvailable: true,
  },
  {
    title: "Work hard",
    author: "Colaps",
    "Number Of Pages": 180,
    isAvailable: false,
  },
];

// Use a for loop to iterate through the books array and print out the title, author, and number of pages for each book.

console.log("=".repeat(20), "Q1", "=".repeat(20));
books.forEach((v) => {
  console.log(`
    Title: ${v.title}
    author: ${v.author}
    pages: ${v["Number Of Pages"]}`);
});

// Create a function called "borrowBook" that takes in two parameters,
// the title of the book and the name of the borrower.
//  The function should check if the book is available for borrowing,
//  and if so, it should update the book's availability to false and add a new property to the book object called "borrower" with the value of the borrower's name.
//  If the book is not available, the function should print out a message saying so.

console.log("=".repeat(20), "Q2", "=".repeat(20));
function borrowBook(bookTittle, Brname) {
  let meth = books.filter((value) => value.title === bookTittle);

  meth.forEach((v) => {
    if (v.isAvailable === true) {
      v.borrower = Brname;
      v.isAvailable = false;
      console.log("The book is available");
    } else if (v.isAvailable === false) {
      console.log("The book is not available");
    }
  });
}
borrowBook("Ikigai", "Mohammed");
borrowBook("Deep Work", "Khaled");

// Create a function called "returnBook" that takes in the title of the book as a parameter.
// The function should check if the book has a "borrower" property and if so,
//  it should update the book's availability to true and remove the "borrower" property.
//  If the book does not have a "borrower" property,
// the function should print out a message saying that the book was never borrowed.
console.log("=".repeat(20), "Q3", "=".repeat(20));
function returnBook(bookTittle) {
  let ret = books.filter((value) => value.title === bookTittle);

  ret.forEach((v) => {
    if (v.borrower) {
      delete v.borrower;
      v.isAvailable = true;
      console.log("The book is available");
    } else {
      console.log("The book was never borrowed");
    }
  });
}
returnBook("Ikigai");
returnBook("Atomic Habits");

// Use a for loop to iterate through the books array and print out the title, author, number of pages, and borrower (if any) for each book.
console.log("=".repeat(20), "Q4", "=".repeat(20));

books.forEach((value) => {
  console.log(`
    Title: ${value.title} 
    Author: ${value.author} 
    Pages: ${value["Number Of Pages"]} 
    borrower: ${
      value.borrower ? value.borrower : "The book was never borrowed"
    }`);
});

// Create a function called "addBook" that takes in an object representing a new book and adds it to the books array
console.log("=".repeat(20), "Q5", "=".repeat(20));

function addBook(book) {
  books.unshift(book);
  return book;
}
addBook({
  title: "be strong",
  author: "fasel",
  "Number Of Pages": 500,
  isAvailable: true,
});

console.log(books[0]);

/*Create a function called "searchBook" that takes 
in a search term as a parameter and returns an array of all books in the books array that contain 
the search term in the title, author or borrower name.*/
console.log("=".repeat(20), "Q6", "=".repeat(20));

function searchBook(search) {
  books.map((value) => {
    if (
      value.title.includes(search) ||
      value.author.includes(search) ||
      (value.borrower !== undefined && value.borrower.includes(search))
    ) {
      console.log(value);
    }
  });
}
// console.log(books);
searchBook("Kh");
searchBook("fas");
searchBook("Iki");


