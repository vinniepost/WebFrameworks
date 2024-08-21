import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  counter:number = 0;
  increment = () => {
    this.counter++
  }
}
