import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//api key : 6jAYLwBpvKKB9w73VnO2DEAN2sPyGGpL
@Injectable({ providedIn: 'root' })
export class ApiService {
  apiKey: string = '6jAYLwBpvKKB9w73VnO2DEAN2sPyGGpL';
  constructor(private http: HttpClient) {}
  getMyLocation(location: any) {
    this.http
      .get(
        `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${this.apiKey}&q=${location.latitude},${location.longitude}`
      )
      .subscribe((resposne: any) => {
        console.log(resposne);
        let key = resposne['Key'];
        this.getMyLocationByKey(key);
      });
  }

  getMyLocationByKey(key: any) {
    this.http
      .get(
        `http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${this.apiKey}`
      )
      .subscribe((resposne) => {
        console.log(resposne);
      });
  }
}
