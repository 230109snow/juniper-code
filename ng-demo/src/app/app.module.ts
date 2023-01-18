import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwoModule } from './two/two.module';
import { FetchCatsComponent } from './fetch-cats/fetch-cats.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Module Decorator
@NgModule({
  declarations: [
    AppComponent,
    FetchCatsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TwoModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
