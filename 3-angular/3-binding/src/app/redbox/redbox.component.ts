import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-redbox',
  templateUrl: './redbox.component.html',
  styleUrls: ['./redbox.component.css']
})
export class RedboxComponent {
  x = 1
  y = 1
  
  updateLocation() {
    this.x = 0
    this.y = 0
  }
}
