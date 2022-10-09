import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Weather } from '../models/WeatherModel';
import { ApiService } from '../services/api.service';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  myLocation: any;
  key: any;
  locationWeather!: Weather;
  constructor(
    private apiService: ApiService,
    private weatherService: WeatherService,
    private router: Router
  ) {}
  options: string[] = [];
  ngOnInit(): void {
    console.log(this.myLocation);
    this.weatherService.myLocation.subscribe((location) => {
      console.log(location);
      this.myLocation = location;
      this.apiService
        .getMyLocation(this.myLocation)
        .subscribe((resposne: any) => {
          //  console.log(resposne);
          this.key = resposne['Key'];
          let country = resposne.Country.LocalizedName;
          let city = resposne.LocalizedName;
          this.apiService
            .getMyLocationByKey(this.key)
            .subscribe((response: any) => {
              console.log(response);
              this.locationWeather = new Weather(
                city,
                country,
                '0',
                '0',
                response[0].Temperature.Metric.Value,
                response[0].WeatherIcon
              );
              console.log(this.locationWeather);
              this.weatherService.setMyLocationWeather(this.locationWeather);
            });
        });
    });

    // if (this.myLocation) {
    //   console.log('after', this.myLocation);
    //   this.apiService
    //     .getMyLocation(this.myLocation)
    //     .subscribe((resposne: any) => {
    //       //  console.log(resposne);
    //       this.key = resposne['Key'];
    //       let country = resposne.Country.LocalizedName;
    //       let city = resposne.City;
    //     });
    // }
    // if (this.key) {
    //   this.apiService
    //     .getMyLocationByKey(this.key)
    //     .subscribe((response: any) => {
    //       console.log(response);
    //     });
    // }

    // this.router.events.subscribe((val: any) => {
    //   console.log(val.url);
    // });
  }
}
