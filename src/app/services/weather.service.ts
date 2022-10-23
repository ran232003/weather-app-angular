//api key : 6jAYLwBpvKKB9w73VnO2DEAN2sPyGGpL
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Weather } from '../models/WeatherModel';
//api key : 6jAYLwBpvKKB9w73VnO2DEAN2sPyGGpL
@Injectable({ providedIn: 'root' })
export class WeatherService {
  myLocation = new Subject<null>();
  myLocationFirst!: null;
  myLocationWeather = new Subject<Weather>();
  myLocationWeatherData!: Weather;
  myLocationFiveDaysWeatherData!: {};
  myLocationFiveDaysWeather = new Subject<{
    weatherArray: any[];
    title: string;
  }>();
  setMyLocation(position: any) {
    this.myLocationFirst = position;
    this.myLocation.next(this.myLocationFirst);
  }
  setMyLocationWeather(locationWeather: any) {
    this.myLocationWeatherData = locationWeather;
    this.myLocationWeather.next(locationWeather);
  }
  setMyLocationFiveDaysWeather(title: any, locationWeather: any[]) {
    let temp = { weatherArray: locationWeather, title: title };
    this.myLocationFiveDaysWeatherData = temp;
    this.myLocationFiveDaysWeather.next(temp);
  }
  getMyLocation() {
    return this.myLocation;
  }
}
