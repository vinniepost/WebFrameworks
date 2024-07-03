import { Component } from '@angular/core';
import { OnInit } from '@angular/core'
import { interval } from 'rxjs';

@Component({
  selector: 'app-teller',
  templateUrl: './teller.component.html',
  styleUrls: ['./teller.component.css']
})
export class TellerComponent implements OnInit {
  teller:number = 0;
  
  ngOnInit(): void {
    setInterval(
      () => {this.teller += 1}, 200
    )
  }
}
