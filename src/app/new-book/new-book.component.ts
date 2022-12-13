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

  /* 
    El evento tiene como parámetro una interfaz IBook
    ya que este tipo de objeto es el que se le envia al
    componente padre con el evento
  */
  @Output() createBookEvent = new EventEmitter<IBook>();

  addBook() {
    const newBook: IBook = {
      name: this.inputName,
      author: this.inputAuthor,
      genre: this.inputGenre 
    }
    //this.books.push(newBook)
    this.createBookEvent.emit(newBook)
    this.hasRegistered = true;
  }
}
