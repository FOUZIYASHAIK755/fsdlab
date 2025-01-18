class Book {
    constructor(title, author, status = 'available') {
        this.title = title;
        this.author = author;
        this.status = status; // 'available' or 'borrowed'
    }

    // Change the status of the book
    changeStatus(status) {
        this.status = status;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    // Add a book to the library
    addBook(book) {
        this.books.push(book);
    }

    // Remove a book from the library
    removeBook(title) {
        this.books = this.books.filter(book => book.title !== title);
    }

    // Borrow a book from the library
    borrowBook(title) {
        const book = this.books.find(book => book.title === title);
        if (book && book.status === 'available') {
            book.changeStatus('borrowed');
            console.log(`You have borrowed "${book.title}".`);
        } else if (book) {
            console.log(`Sorry, "${book.title}" is already borrowed.`);
        } else {
            console.log(`Sorry, the book "${title}" is not available in the library.`);
        }
    }

    // List all books in the library
    listBooks() {
        console.log("Library Books:");
        this.books.forEach(book => {
            console.log(`${book.title} by ${book.author} - Status: ${book.status}`);
        });
    }
}

// Example usage:
const library = new Library();

// Adding books to the library
library.addBook(new Book("The Great Gatsby", "F. Scott Fitzgerald"));
library.addBook(new Book("1984", "George Orwell"));
library.addBook(new Book("Moby Dick", "Herman Melville"));

// Listing all books
library.listBooks();

// Borrowing a book
library.borrowBook("1984");

// Trying to borrow a book that's already borrowed
library.borrowBook("1984");

// Removing a book from the library
library.removeBook("Moby Dick");

// Listing books again after removal
library.listBooks();
