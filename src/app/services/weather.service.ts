//api key : 6jAYLwBpvKKB9w73VnO2DEAN2sPyGGpL
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Weather } from '../models/WeatherModel';
//api key : 6jAYLwBpvKKB9w73VnO2DEAN2sPyGGpL
@Injectable({ providedIn: 'root' })
export class WeatherService {
  myLocation = new Subject<{}>();
  myLocationWeather = new Subject<Weather>();
  setMyLocation(position: any) {
    this.myLocation.next(position);
  }
  setMyLocationWeather(locationWeather: any) {
    this.myLocationWeather.next(locationWeather);
  }
  getMyLocation() {
    return this.myLocation;
  }
}
