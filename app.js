// dom declarations
const viewBook = document.querySelector('.viewBook');
const addBook = document.querySelector('.addBook');
const title = document.querySelector('.title');
const author = document.querySelector('.author');
const pages = document.querySelector('.pages');
const read = document.querySelector('.read');
const cardHolder = document.getElementById('cardHolder')
const inputTitle = document.getElementById('inputTitle')
const inputAuthor = document.getElementById('inputAuthor')
const inputPages = document.getElementById('inputPages')
const inputRead = document.getElementById('inputRead')
const submitNew = document.getElementById('submitNew')

// constructor for making new books
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {
        let info = title + ' by ' + author + ', ' + pages + ' pages, ' + read;
        return info;
    }
}

// manual book additions
const hobbit = new Book('hobbit', 'tolkein', '299', 'read');
const mistborn = new Book('the Mistborn trilogy', 'brandon Sanderson', '3000', 'read');
const dune = new Book('Dune', 'frank herbert', '412', 'read');
const doors = new Book('The doors of stone', 'Patrick rothfuss', '1500', 'not read');

let myLibrary = [hobbit, mistborn, dune, doors];

// btn functionality
viewBook.addEventListener('click', () => {showBooks()})
submitNew.addEventListener('click', () => {addBookToLibrary()})

// functions
    const showBooks = () =>{
        myLibrary.forEach((books) => {
            let newCard = document.createElement('div');
            newCard.className = ('card')
            cardHolder.appendChild(newCard);
            let newTitle = document.createElement('p');
            newTitle.className = ('title')
            newCard.appendChild(newTitle);
            let newAuthor = document.createElement('p');
            newAuthor.className = ('author')
            newCard.appendChild(newAuthor);
            let newPages = document.createElement('p');
            newPages.className = ('pages')
            newCard.appendChild(newPages);
            let newRead = document.createElement('p');
            newRead.className = ('read')
            newCard.appendChild(newRead);
            let newChange = document.createElement('input')
            newChange.type =('button')
            newChange.value = ('change read status')
            newChange.className = ('btnRead')
            newCard.appendChild(newChange);
            let newRemove = document.createElement('input');
            newRemove.type = ('button')
            newRemove.className = ('btnRemove')
            newRemove.value = ('remove book')
            newCard.appendChild(newRemove);


            newTitle.innerHTML = books.title;
            newAuthor.innerHTML = books.author;
            newPages.innerHTML = books.pages;
            newRead.innerHTML = books.read;
        });
    };
    
const addBookToLibrary = () => {
      if (inputTitle.value != '' || inputAuthor.value != '' || inputPages.value != '' || inputRead.value != '') {
        const bookx = new Book(inputTitle.value , inputAuthor.value, inputPages.value, inputRead.value );
        myLibrary.push(bookx);
      } 
      else{
          alert('You must enter all the info in before submitting');
      }
    }







//Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book
//: author, title, number of pages, whether it’s been read and anything else you might want.


//Add a button on each book’s display to remove the book from the library.
    //You will need to associate your DOM elements with the actual book objects in some way. 
    //One easy solution is giving them a data-attribute that corresponds to the index of the library array.

//Add a button on each book’s display to change its read status.
    //To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.

