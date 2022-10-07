//api key : 6jAYLwBpvKKB9w73VnO2DEAN2sPyGGpL
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
//api key : 6jAYLwBpvKKB9w73VnO2DEAN2sPyGGpL
@Injectable({ providedIn: 'root' })
export class WeatherService {
  myLocation = new Subject<{}>();
  myLocationWeather = new Subject<{}>();
  setMyLocation(position: any) {
    this.myLocation.next(position);
  }
  setMyLocationWeather(locationWeather: any) {
    this.myLocation.next(locationWeather);
  }
  getMyLocation() {
    return this.myLocation;
  }
}
