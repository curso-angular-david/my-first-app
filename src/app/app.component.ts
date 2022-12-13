import { Component } from '@angular/core';
import { IBook } from './models/book.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  greating = 'Hello World';
  name="David"

  RootBooks: IBook[] = [
    { 
      name: "Quijote",
      author: "Cervantes",
      genre: "Novela"
    },
    { 
      name: "100 años de soledad",
      author: "Marquez",
      genre: "Novela"
    },
    { 
      name: "El señor de los anillos",
      author: "Tolkien",
      genre: "Fantasia"
    }
  ]

  createBook() {
    
  }
}


