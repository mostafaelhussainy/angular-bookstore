import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../models/book.model';
import { BookService } from '../../services/book/book.service';
import { HeaderComponent } from '../shared/header/header.component';
import { AsideComponent } from '../shared/aside/aside.component';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {
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

  constructor(private route: ActivatedRoute, private router: Router, private bookService: BookService) { }

  ngOnInit(): void {
    const bookId = this.route.snapshot.paramMap.get('id');
    if (bookId) {
      this.bookService.getBook(bookId).subscribe(book => {
        this.book = book;
      });
    } else {
      // Handle error case when bookId is not provided
    }
  }

  updateBook(): void {
    this.bookService.updateBook(this.book).subscribe(() => {
      this.router.navigate(['/view-book', this.book.id]);
    });
  }
}
