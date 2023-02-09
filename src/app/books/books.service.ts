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
        name: 'Isaa',
        age: 25
      },
      {
        name: 'Wozaah',
        age: 25
      }, {
        name: 'Zupaaah',
        age: 25
      }, {
        name: 'toto',
        age: 25
      },

    ]
  }

  constructor() { }
}
