import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor-weer',
  templateUrl: './ngfor-weer.component.html',
  styleUrls: ['./ngfor-weer.component.css']
})
export class NgforWeerComponent implements OnInit{
  weatherData = [
    { location: 'Anchorage', temperature: this.getRandomTemperature(), forecast: '', imageUrl: '' },
    { location: 'Brussel', temperature: this.getRandomTemperature(), forecast: '', imageUrl: '' },
    { location: 'Osaka', temperature: this.getRandomTemperature(), forecast: '', imageUrl: '' },
    { location: 'Auckland', temperature: this.getRandomTemperature(), forecast: '', imageUrl: '' },
    { location: 'Kaapstad', temperature: this.getRandomTemperature(), forecast: '', imageUrl: '' }
  ];

  ngOnInit() {
    this.updateWeatherData();
    setInterval(() => {
      this.updateWeatherData();
    }, 2000);
  }

  getRandomTemperature(): number {
    return Math.floor(Math.random() * 26); // Generates a random number between 0 and 25
  }

  updateWeatherData() {
    this.weatherData.forEach(data => {
      data.temperature = this.getRandomTemperature();
      data.forecast = this.getForecast(data.temperature);
      data.imageUrl = this.getImageUrl(data.temperature);
    });
  }

  getForecast(temperature: number): string {
    if (temperature === 0) {
      return 'Kans op gladheid';
    } else if (temperature >= 1 && temperature <= 3) {
      return 'Kans op sneeuw';
    } else if (temperature > 17) {
      return 'Zacht weertje';
    } else {
      return 'Geen bijzonderheden';
    }
  }

  getImageUrl(temperature: number): string {
    const imgCode = temperature % 5;
    return `https://openweathermap.org/img/w/0${imgCode}d.png`;
  }
}
