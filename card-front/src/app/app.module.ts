import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardsContainerComponent } from './cards-container.component';
import {CardsService} from './cards.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CardsContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
