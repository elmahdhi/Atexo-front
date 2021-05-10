import {Component, Input, OnInit} from '@angular/core';
import {getCardsImages} from './static/card-mapper';

@Component({
  selector: 'app-cards-container',
  template: `
    <div class="row">
      <div *ngFor="let card of cards" class="column">
        <img [src]="cardImages[card.value][card.color]" alt="Snow" style="width:100%">
      </div>
    </div>
  `,
  styles: [`
    * {
      box-sizing: border-box;
    }

    .column {
      float: left;
      width: 10%;
      padding: 5px;
    }

    .row::after {
      content: "";
      clear: both;
      display: table;
    }
  `]
})
export class CardsContainerComponent implements OnInit {

  @Input() cards: Array<any> | undefined;
  cardImages: any;

  constructor() {
  }

  ngOnInit(): void {
    this.cardImages = getCardsImages();
  }

}
