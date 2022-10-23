import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherService } from './weather.service';
import { map } from 'rxjs/operators';

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
  getMyLocationWeatherFiveDays(key: any) {
    return this.http.get(
      `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${this.apiKey}&metric=true`
    );
  }
  autoComplete(text: any) {
    return this.http
      .get(
        `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${this.apiKey}&q=${text}`
      )
      .pipe(
        map((responseData: any) => {
          let tempArray: any = [];
          responseData.forEach((element: any) => {
            let tempObject: any = {};
            tempObject['cityOriginal'] = element.LocalizedName;
            tempObject['countryOriginal'] = element.Country.LocalizedName;
            tempObject[
              'city'
            ] = `${element.LocalizedName} (${element.Country.LocalizedName})`;
            tempObject['key'] = element.Key;
            tempArray.push(tempObject);
          });
          return tempArray;
        })
      );
  }
  getMyLocationByKey2(key: any) {
    return this.http
      .get(
        `http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${this.apiKey}`
      )
      .subscribe((response) => {
        return response;
      });
  }
  getMyLocation2(location: any) {
    return this.http
      .get(
        `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${this.apiKey}&q=${location.latitude},${location.longitude}`
      )
      .subscribe((response) => {
        return response;
      });
  }
}
