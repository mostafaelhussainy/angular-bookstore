import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.scss']
})
export class ViewBookComponent implements OnInit {
  book: Book | undefined;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const bookId = this.route.snapshot.paramMap.get('id');
    if (bookId) {
      const bookData = sessionStorage.getItem(`book_${bookId}`);
      if (bookData) {
        this.book = JSON.parse(bookData);
      }
    }
  }

  goBack(): void {
    this.router.navigate(['/books']);
  }
}
