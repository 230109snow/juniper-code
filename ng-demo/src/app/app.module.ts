import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwoModule } from './two/two.module';
import { FetchCatsComponent } from './fetch-cats/fetch-cats.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { EventsComponent } from './events/events.component';
import { CardsComponent } from './cards/cards.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { SafePipeModule } from 'safe-pipe';

// Module Decorator
@NgModule({
  declarations: [
    AppComponent,
    FetchCatsComponent,
    NavbarComponent,
    EventsComponent,
    CardsComponent,
    CardDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TwoModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SafePipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
