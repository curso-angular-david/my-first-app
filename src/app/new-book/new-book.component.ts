import { Component, EventEmitter, Output } from '@angular/core';
import { IBook } from '../models/book.model';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent {
  title = "Registro de libros";
  inputName: string = "";
  inputAuthor: string = "";
  inputGenre: string = "";
  hasRegistered: boolean = false;

  @Output() createBookEvent = new EventEmitter<string>();

  addBook() {
    const newBook: IBook = {
      name: this.inputName,
      author: this.inputAuthor,
      genre: this.inputGenre 
    }
    this.books.push(newBook)
    this.hasRegistered = true;
  }
}
