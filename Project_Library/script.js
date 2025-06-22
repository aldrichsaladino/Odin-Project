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
    console.log("Updated Library:", myLibrary);

    //clear the form
    document.getElementById("title").value = '';
    document.getElementById("author").value = '';
    document.getElementById("pages").value = '';
    document.getElementById("read").checked = false; //the uncheck is for the checkbox

    //update the display of the books using the display books function
    displayBooks();
}

//set a function to now display the books in the library array via html
function displayBooks() {
    //Create the container where the books will be displayed by DOM
    var container = document.querySelector('.container');
    container.innerHTML = ''; //Clears the old content

    //Loop through the library array and display each book in the container
    myLibrary.forEach((book, index) => {
        //Create a div for each book
        var bookDiv = document.createElement('div');
        bookDiv.classList.add('book'); //this is for the css styling of the books
        //While it loops and creates a div for each book, adding book into containers with the following text content
        bookDiv.textContent = `${book.title} by ${book.author} with ${book.pages} pages. Read: ${book.read}`;
        //Append the book div to the container
        container.append(bookDiv)

        //Create a button to remove the book
        var removeButton = document.createElement('button');
        removeButton.textContent = 'Remove'; //this is the text content of the button that will remove the book
        removeButton.addEventListener('click', () => removeBook (index)); //this is the event listener for the button to remove the book
        bookDiv.append(removeButton); //this appends the button to the book div
        console.log("Removing the book from the index", index);

        //Create a button to change the read 
        var toggleReadButton = document.createElement('button');
        toggleReadButton.textContent = 'Toggle Reads'; //this is the text content of the button that will toggle the read status
        toggleReadButton.addEventListener('click', () => {
            book.read = !book.read;
            console.log(`Toggle book status for: ${book.title}`);
            displayBooks();
        
        }); //The button will click if its read or not readm, and then display the books


        console.log("Displaying books...");
        console.log("Current Library:", myLibrary);

    })
}

function removeBook (index) {
    myLibrary.splice(index, 1); //this removes the book from the library array at index 1
    displayBooks(); //this updates the display of the books
}

//Event listener for the form submit button to stop the page from refreshing and to run the addBookToLibrary function
document.getElementById('book-form').addEventListener('submit', function (e) {
    e.preventDefault();
    addBookToLibrary();
})

function saveLocal() {
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}

function loadLocal() {
    var storedBooks = localStorage.getItem('myLibrary'); //this gets the books from local storage
    if (storedBooks) { //if there are books in local storage when loaded, it will parse and display them
        myLibrary = JSON.parse(storedBooks);
        displayBooks();
    }
   
}


//load the books that were stored from the local save
window.onload = loadLocal();

// Event listener for the form submit button
document.getElementById('book-form').addEventListener('submit', function (e) {
    e.preventDefault();
    addBookToLibrary();
});