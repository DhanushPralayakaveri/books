import { Component } from '@angular/core';
import { BookModel } from './book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='books';
  selectedBook: BookModel | null = null;

  // Event handler to set the selected book
  selectBook(book: BookModel): void {
    this.selectedBook = book;
  }
}
