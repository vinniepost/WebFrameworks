import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CounterComponent } from './counter/counter.component';
import { RedboxComponent } from './redbox/redbox.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CounterComponent,
    RedboxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
