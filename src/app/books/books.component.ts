import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {
  a='First'
  b='Kenya'
  c='Goal'
  isDisabled=false

  handleClick(){
    this. isDisabled=!false
  }

}
