import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Weather } from 'src/app/models/WeatherModel';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css'],
})
export class WeatherCardComponent implements OnInit, OnChanges {
  weatherLocation!: Weather;
  constructor(private weatherService: WeatherService) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.weather.currentValue) {
      this.weather = changes.weather.currentValue;
    }
  }
  @Input() weather!: any;
  ngOnInit(): void {
    // console.log(this.weather, 'check input');
    // this.weatherService.myLocationWeather.subscribe((weather) => {
    //   console.log(weather);
    //   console.log(this.weather, 'check input');
    //   this.weatherLocation = weather;
    // });
    // console.log(this.weatherLocation);
  }
}
