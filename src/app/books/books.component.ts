import { Component, OnInit } from '@angular/core';
import { Book } from '../types/book';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  
  books: Book[]=[]

  constructor(private bookService:BooksService){}

   ngOnInit(): void {
     this.books = this.bookService.getBooks()
   }


}
