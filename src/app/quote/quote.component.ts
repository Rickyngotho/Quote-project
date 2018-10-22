import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1, 'No such thing as a life thats better than yours.', 'J cole', 'Ricky', 0),
    new Quote(1, 'Follow your heart. Don’t follow what you have been told you are supposed to do.', 'J cole', 'Ricky', 0),
    new Quote(1, 'We got dreams and we got the right to chase them.', 'J cole', 'Ricky', 0)


  ];
  toogleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  addNewQuote(quote) {
    const quoteLength: number = this.quotes.length;
    quote.id = quoteLength +  1;
    this.quotes.push(quote);

  }
   deleteQuote(isComplete, index) {
     if (isComplete) {
       const toDelete: boolean = confirm(`Are you sure you want to delete this quote?`);
       alert(`${this.quotes[index].name},your quote has been deleted!`);

       if (toDelete) {
         this.quotes.splice(index, 1);
       }
     }
   }

  constructor() { }

  ngOnInit() {
  }

}
