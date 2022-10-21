import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Weather } from '../models/WeatherModel';
import { ApiService } from '../services/api.service';
import { FavoriteService } from '../services/favorite.service';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  myLocation: any;
  iconColor!: string;
  myInput!: string;
  key: any;
  title: any;
  weatherArray: any;
  locationWeather!: Weather;
  constructor(
    public apiService: ApiService,
    private weatherService: WeatherService,
    private router: Router,
    private favoriteService: FavoriteService
  ) {}
  addToFavorite() {
    console.log('icon', this.iconColor);
    let check;
    check = this.favoriteService.addToFavirite(this.locationWeather);
    if (check) {
      this.iconColor = 'green';
    } else {
      this.iconColor = 'black';
    }
    console.log('icon', this.iconColor);

    // if (!this.iconColor || this.iconColor === 'black') {
    //   check =  this.favoriteService.addToFavirite(this.locationWeather);
    // } else {
    //   this.iconColor = 'black';
    // }
  }
  displayFn(option: any): string {
    console.log(option, 'displayFn');
    // console.log(this.apiService.apiKey, 'displayFn');
    // this.apiService.getMyLocationByKey(option.key).subscribe((res) => {
    //   console.log(res, 'res');
    // });
    return option ? option : '';
  }
  testing(option: any) {
    //console.log(option, this.myInput, 'option');
    this.myInput = option.city;
    this.apiService
      .getMyLocationByKey(option.key)
      .subscribe((response: any) => {
        console.log(response);
        this.locationWeather = new Weather(
          option.key,
          option.cityOriginal,
          option.countryOriginal,
          '0',
          '0',
          response[0].Temperature.Metric.Value,
          response[0].WeatherIcon
        );
        console.log(
          this.locationWeather,
          'inside testing',
          response[0].Temperature.Metric.Value
        );

        this.weatherService.setMyLocationWeather(this.locationWeather);
        this.apiService
          .getMyLocationWeatherFiveDays(option.key)
          .subscribe((fiveDaysWeather: any) => {
            console.log(fiveDaysWeather, 'fiveDaysWeather');
            let title = fiveDaysWeather.Headline.Text;
            let tempArray: any = [];
            fiveDaysWeather.DailyForecasts.forEach((element: any) => {
              let weather = new Weather(
                option.key,
                option.cityOriginal,
                option.countryOriginal,
                element.Temperature.Minimum.Value,
                element.Temperature.Maximum.Value,
                999,
                element.Day.Icon
              );
              weather.setIconText(element.Day.IconPhrase);
              tempArray.push(weather);
            });
            this.title = title;
            this.weatherArray = tempArray;
            this.weatherService.setMyLocationFiveDaysWeather(title, tempArray);
          });
      });
  }
  onChange() {
    //console.log('this.myInput', this.myInput);
  }
  onSearchChange(): void {
    //console.log('searchValue', this.myInput);
    this.apiService.autoComplete(this.myInput).subscribe((res) => {
      console.log(res, 'res');
      this.options = res;
    });
  }
  options: any = [];
  ngOnInit(): void {
    this.myLocation = this.weatherService.myLocationFirst;
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
                this.key,
                city,
                country,
                '0',
                '0',
                response[0].Temperature.Metric.Value,
                response[0].WeatherIcon
              );
              console.log(this.locationWeather);
              this.weatherService.setMyLocationWeather(this.locationWeather);
              this.apiService
                .getMyLocationWeatherFiveDays(this.key)
                .subscribe((fiveDaysWeather: any) => {
                  console.log(fiveDaysWeather, 'fiveDaysWeather');
                  let title = fiveDaysWeather.Headline.Text;
                  let tempArray: any = [];
                  fiveDaysWeather.DailyForecasts.forEach((element: any) => {
                    let weather = new Weather(
                      this.key,
                      city,
                      country,
                      element.Temperature.Minimum.Value,
                      element.Temperature.Maximum.Value,
                      999,
                      element.Day.Icon
                    );
                    weather.setIconText(element.Day.IconPhrase);
                    tempArray.push(weather);
                  });
                  this.title = title;
                  this.weatherArray = tempArray;
                  this.weatherService.setMyLocationFiveDaysWeather(
                    title,
                    tempArray
                  );
                });
            });
        });
    });

    if (this.myLocation) {
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
                this.key,
                city,
                country,
                '0',
                '0',
                response[0].Temperature.Metric.Value,
                response[0].WeatherIcon
              );
              console.log(this.locationWeather);
              this.weatherService.setMyLocationWeather(this.locationWeather);
              this.apiService
                .getMyLocationWeatherFiveDays(this.key)
                .subscribe((fiveDaysWeather: any) => {
                  console.log(fiveDaysWeather, 'fiveDaysWeather');
                  let title = fiveDaysWeather.Headline.Text;
                  let tempArray: any = [];
                  fiveDaysWeather.DailyForecasts.forEach((element: any) => {
                    let weather = new Weather(
                      this.key,
                      city,
                      country,
                      element.Temperature.Minimum.Value,
                      element.Temperature.Maximum.Value,
                      999,
                      element.Day.Icon
                    );
                    weather.setIconText(element.Day.IconPhrase);
                    tempArray.push(weather);
                  });
                  this.title = title;
                  this.weatherArray = tempArray;
                  this.weatherService.setMyLocationFiveDaysWeather(
                    title,
                    tempArray
                  );
                });
            });
        });
    }
  }
}
