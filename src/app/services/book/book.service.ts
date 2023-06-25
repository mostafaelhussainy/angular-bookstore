import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from '../../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private storageKey = 'books';

  constructor() { }

  getBooks(): Observable<Book[]> {
    const books = JSON.parse(sessionStorage.getItem(this.storageKey) || '[]');
    return of(books);
  }

  getBook(bookId: string): Observable<Book> {
    const books = JSON.parse(sessionStorage.getItem(this.storageKey) || '[]');
    const book = books.find((b: Book) => b.id === bookId);
    return of(book);
  }

  addBook(book: Book): Observable<null> {
    const books = JSON.parse(sessionStorage.getItem(this.storageKey) || '[]');
    book.id = this.generateUniqueId();
    books.push(book);
    sessionStorage.setItem(this.storageKey, JSON.stringify(books));
    return of(null);
  }

  updateBook(book: Book): Observable<null> {
    const books = JSON.parse(sessionStorage.getItem(this.storageKey) || '[]');
    const index = books.findIndex((b: Book) => b.id === book.id);
    if (index !== -1) {
      books[index] = book;
      sessionStorage.setItem(this.storageKey, JSON.stringify(books));
    }
    return of(null);
  }

  deleteBook(bookId: string): Observable<null> {
    const books = JSON.parse(sessionStorage.getItem(this.storageKey) || '[]');
    const updatedBooks = books.filter((b: Book) => b.id !== bookId);
    sessionStorage.setItem(this.storageKey, JSON.stringify(updatedBooks));
    return of(null);
  }

  private generateUniqueId(): string {
    // Implement a function to generate a unique ID for the book
    return ''; // Placeholder, implement your logic here
  }
}
