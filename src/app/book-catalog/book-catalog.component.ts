import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BookModel } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-catalog',
  templateUrl: './book-catalog.component.html',
  styleUrls: ['./book-catalog.component.css']
})
export class BookCatalogComponent implements OnInit {
  books: BookModel[] = [];

  @Output() bookSelected = new EventEmitter<BookModel>();

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks().subscribe(books => {
      this.books = books;
    });
  }

  selectBook(book: BookModel): void {
    this.bookSelected.emit(book);
  }
}
