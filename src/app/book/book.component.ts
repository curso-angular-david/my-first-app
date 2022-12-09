import { Component } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  name = "Don Quijote"
  author = "Miguel de Cervantes"
  year = 1910
  edition = 10
  private availableUnits = 0

  getAvailableUnits() {
    return this.availableUnits
  }
}
