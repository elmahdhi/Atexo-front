import {Component, OnInit} from '@angular/core';
import {CardsService} from './cards.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cards: any;
  cardsSorted: any;

  constructor(private cardsService: CardsService) {

  }

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    this.cardsService.getCards().subscribe(cards => {
      console.log('cards', cards);
      this.cards = (cards as any).mainCards;
      this.cardsSorted = (cards as any).mainCardsSorted;
    });
  }

}
