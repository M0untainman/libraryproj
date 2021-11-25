//dom declarations
const viewBook = document.querySelector(".viewBook");
const addBook = document.querySelector(".addBook");
const title = document.querySelector(".title");
const author = document.querySelector(".author");
const pages = document.querySelector(".pages");
const read = document.querySelector(".read");

//manual book additions
const hobbit = new Book("hobbit", "tolkein", "299", "read");
const mistborn = new Book("the Mistborn trilogy", "brandon Sanderson", "3000", "read");
const dune = new Book("Dune", "frank herbert", "412", "read");
const doors = new Book("The doors of stone", "Patrick rothfuss", "1500", "not read");

//btn functionality
viewBook.addEventListener("click", () => {showBooks()})

//functions
function showBooks(){
    title.innerHTML = hobbit.title;
    author.innerHTML = hobbit.author;
    pages.innerHTML = hobbit.pages;
    read.innerHTML = hobbit.read;
};


let myLibrary = [hobbit, mistborn, dune, doors];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        let info = title + " by " + author + ", " + pages + " pages, " + read;
        return info;
    }
}



function addBookToLibrary() {
    //take user’s input and store the new book objects into myLibrary.
}

//Write a function that loops through the array and displays each book on the page. 
//You can display them in some sort of table, or each on their own “card”. 
//It might help for now to manually add a few books to your array so you can see the display.


//Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book
//: author, title, number of pages, whether it’s been read and anything else you might want.


//Add a button on each book’s display to remove the book from the library.
    //You will need to associate your DOM elements with the actual book objects in some way. 
    //One easy solution is giving them a data-attribute that corresponds to the index of the library array.

//Add a button on each book’s display to change its read status.
    //To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.

