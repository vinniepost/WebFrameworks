import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-display-time',
  templateUrl: './display-time.component.html',
  styleUrls: ['./display-time.component.css']
})
export class DisplayTimeComponent implements OnInit{

  Time: Date = new Date();

  ngOnInit(){
    setInterval(() => {
      this.Time = new Date();
    }, 1000);
  }
}
