import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  urlCards = 'http://localhost:8282/services/cards/main';

  constructor(private http: HttpClient) {
  }

  getCards() {
    return this.http.get(this.urlCards);
  }

}
