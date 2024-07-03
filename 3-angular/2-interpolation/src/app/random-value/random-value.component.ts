import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-random-value',
  templateUrl: './random-value.component.html',
  styleUrls: ['./random-value.component.css']
})
export class RandomValueComponent implements OnInit{
  min:number = 0;
  max:number = 100;
  random:number =0;
  ngOnInit(): void {
    setInterval(()=>{
      this.random = (this.min + Math.floor(this.max*Math.random()))
    },200)
  }
}
