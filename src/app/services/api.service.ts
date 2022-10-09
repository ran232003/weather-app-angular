import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherService } from './weather.service';

//api key : 6jAYLwBpvKKB9w73VnO2DEAN2sPyGGpL
@Injectable({ providedIn: 'root' })
export class ApiService {
  apiKey: string = '6jAYLwBpvKKB9w73VnO2DEAN2sPyGGpL';
  constructor(
    private http: HttpClient,
    private weatherService: WeatherService
  ) {}
  getMyLocation(location: any) {
    return this.http.get(
      `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${this.apiKey}&q=${location.latitude},${location.longitude}`
    );
  }

  getMyLocationByKey(key: any) {
    return this.http.get(
      `http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${this.apiKey}`
    );
  }
}
