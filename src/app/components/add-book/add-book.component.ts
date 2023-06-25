import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../../models/book.model';
import { BookService } from '../../services/book/book.service';
import { HeaderComponent } from '../shared/header/header.component';
import { AsideComponent } from '../shared/aside/aside.component';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent {
  book: Book = {
    id: '',
    title: '',
    author: '',
    releaseDate: '',
    price: 0,
    isbn: '',
    version: '',
    category: '',
    brief: '',
    numberOfPages: 0,
    averageReadingTime: 0,
    imageUrl: ''
  };

  constructor(private router: Router, private bookService: BookService) { }

  addBook(): void {
    this.bookService.addBook(this.book).subscribe(() => {
      this.router.navigate(['/books']);
    });
  }
}
