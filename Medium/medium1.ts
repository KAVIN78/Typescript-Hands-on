class Book {

  constructor(public title: string) {

  } }
    class Library {
       
        books: Book[] = [];
        addBooks(book: Book): void {
        this.books.push(book);
    }
    
    removeBooks(books: Book): void {
         const index = this.books.indexOf(books);
         if (index !== -1) {
         this.books.splice(index, 1);
    }
    }

     searchBooksByTitle(title: string): Book | undefined {
       return this.books.find((book) => book.title === title);
    }
    }
    
    const library = new Library();

    const book1 = new Book("It Starts With Us");
    const book2 = new Book("Ikigai");
    const book3 = new Book("It Ends With Us");
    
    library.addBooks(book1);
    library.addBooks(book2);
    library.addBooks(book3);
    
    console.log(library.books);
    
    library.removeBooks(book2);
    
    library.searchBooksByTitle("It Starts With Us");
    
    console.log(library.searchBooksByTitle);
    
    console.log(library.books);
    