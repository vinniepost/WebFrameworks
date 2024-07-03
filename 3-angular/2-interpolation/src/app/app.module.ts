import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DisplayTimeComponent } from './display-time/display-time.component';
import { TellerComponent } from './teller/teller.component';
import { RandomValueComponent } from './random-value/random-value.component';
import { SinceStartComponent } from './since-start/since-start.component';
import { NgifRandomComponent } from './ngif-random/ngif-random.component';
import { NgforWeerComponent } from './ngfor-weer/ngfor-weer.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayTimeComponent,
    TellerComponent,
    RandomValueComponent,
    SinceStartComponent,
    NgifRandomComponent,
    NgforWeerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
