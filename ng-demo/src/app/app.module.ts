import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwoModule } from './two/two.module';

// Module Decorator
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TwoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
