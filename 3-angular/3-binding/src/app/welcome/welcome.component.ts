import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{
  ngOnInit(): void {
    setInterval(()=>{
      if(this.counter === this.max) // This has to be 5 because of how setInterval works
        {
          this.counter = 1
        }
      else{
        this.counter++
      }
      this.CurrentImage = `assets/image_${this.counter}.jpg`
    }, 1000)
  }
  counter:number = 1
  max:number = 5
  CurrentImage:string = `assets/image_${this.counter}.jpg`
}