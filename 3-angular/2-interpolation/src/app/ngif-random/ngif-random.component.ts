import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif-random',
  templateUrl: './ngif-random.component.html',
  styleUrls: ['./ngif-random.component.css']
})
export class NgifRandomComponent implements OnInit{
  x:number;
  min:number;
  max:number;

  random = () => {
    this.x = (this.min + Math.floor(this.max*Math.random()))
  }

  constructor(){
    this.x = -1;
    this.min = 0;
    this.max = 10;
  }

  


  ngOnInit(): void {
    setInterval(()=>{
      this.random()
    }, 2000)
  }
}
