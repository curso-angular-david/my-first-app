import { Component, Input } from "@angular/core"

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.css"]
})
export class BooksComponent {
  @Input() books: Book[] = []
}

interface Book {
  author: string
  name: string,
  genre: string
}

