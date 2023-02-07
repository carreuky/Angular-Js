import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  getBooks(){
    return [
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

  constructor() { }
}
