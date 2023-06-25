import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../../models/book.model';
import { BookService } from '../../services/book/book.service';
import { HeaderComponent } from '../shared/header/header.component';
import { AsideComponent } from '../shared/aside/aside.component';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {
  books: Book[] = [];
  filteredBooks: Book[] = [];
  searchTitle: string = '';
  // searchAuthor: string = '';

  constructor(private router: Router, private bookService: BookService) {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks().subscribe(books => {
      this.books = books;
      this.filteredBooks = [...this.books];
    });
  }

  addBook(): void {
    this.router.navigate(['/add-book']);
  }

  viewBook(bookId: string): void {
    this.router.navigate(['/view-book', bookId]);
  }

  editBook(bookId: string): void {
    this.router.navigate(['/edit-book', bookId]);
  }

  deleteBook(bookId: string): void {
    if (confirm('Are you sure you want to delete the book?')) {
      this.bookService.deleteBook(bookId).subscribe(() => {
        this.getBooks();
      });
    }
  }

  filterBooks(): void {
    this.filteredBooks = this.books.filter((book: Book) => {
      const matchesTitle = book.title.toLowerCase().includes(this.searchTitle.toLowerCase());
      return matchesTitle;
      // const matchesAuthor = book.author.toLowerCase().includes(this.searchAuthor.toLowerCase());
      // return matchesTitle && matchesAuthor;
    });
  }
}
