var Book = /** @class */ (function () {
    function Book(title) {
        this.title = title;
    }
    return Book;
}());
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.addBooks = function (book) {
        this.books.push(book);
    };
    Library.prototype.removeBooks = function (book) {
        var index = this.books.indexOf(book);
        if (index !== -1) {
            this.books.splice(index, 1);
        }
    };
    Library.prototype.searchBooksByTitle = function (title) {
        return this.books.forEach(function (book) { return book.title === title; });
    };
    return Library;
}());
var library = new Library();
var book1 = new Book("Life of pie");
var book2 = new Book("The Alchemist");
var book3 = new Book("A Breif history of time");
library.addBooks(book1);
library.addBooks(book2);
library.addBooks(book3);
console.log(library.books);
library.removeBooks(book2);
console.log(library.searchBooksByTitle("Life of pie")); // Output: Book { title: 'Harry Potter' }
console.log(library.books);
