import { Component } from '@angular/core';
import { Book } from '../types/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {
  
  books: Book[] = [
    {
      name: 'Blue',
      age: 56
    },
    {
      name: 'Wello',
      age: 25
    }
  ]

}
