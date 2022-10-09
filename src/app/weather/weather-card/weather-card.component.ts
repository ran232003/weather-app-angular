import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/app/models/WeatherModel';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css'],
})
export class WeatherCardComponent implements OnInit {
  weatherLocation!: Weather;
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.myLocationWeather.subscribe((weather) => {
      console.log(weather);
      this.weatherLocation = weather;
    });
    console.log(this.weatherLocation);
  }
}
