//Start with Array for Library
let myLibrary = [];
//Book Constructor . this is the blueprint for the book object
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}
//Add book to library function. Takes user input and creates a book object and adds it to the library array
function addBookToLibrary() {

    console.log("addBookToLibrary function is working");
    //Create variables for user input with get element by id for form input
    var title = document.getElementById("title").value;
    var author = document.getElementById("author").value;
    var pages = document.getElementById("pages").value;
    var read = document.getElementById("read").checked;

    console.log(title, author, pages, read);

    //New variable for the New Book Object
    var newBook = new Book(title, author, pages, read)
    console.log(newBook);

    //add new book object to library array
    myLibrary.push(newBook);

}

//set a function to now display the books in the library array via html
function displayBooks() {
    //Create the container where the books will be displayed by DOM
    var container = document.querySelector('.container');
    container.innerHTML = ''; //Clears the old content

    //Loop through the library array and display each book in the container
    myLibrary.forEach((Book, index) => {
        //Create a div for each book
        var bookDiv = document.createElement('div');
        //While it loops and creates a div for each book, adding book into containers with the following text content
        bookDiv.textContent = `${book.title} by ${book.author} with ${book.pages} pages. Read: ${book.read}`;
        //Append the book div to the container
        container.append(bookDiv)
    })
}
