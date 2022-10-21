import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css'],
})
export class WeatherListComponent implements OnInit, OnChanges {
  weatherObject: any;
  checkLength: boolean = false;
  @Input() weatherArray: any;
  @Input() title: any;
  test: any =
    'write a simple, We expect to see 2 pages in this app. (weather page and favorites page). responsive, web app in angular/react that shows the weather of some city. The  user should be able to search for a city and save it to favorites (locally, a server is not required)';

  constructor(private weatherService: WeatherService) {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes.title) {
      console.log(changes.title);
      this.checkLength = changes.title.currentValue.leangth > 30 ? true : false;
      this.title = changes.title.currentValue;
    }
    if (changes.weatherArray.currentValue) {
      console.log('weather array change', changes);
      this.weatherArray = changes.weatherArray.currentValue;
    }
    console.log(this.title, this.weatherArray);
  }

  ngOnInit(): void {
    this.weatherObject = this.weatherService.myLocationFiveDaysWeather;
    console.log(
      'this.weatherService.myLocationFiveDaysWeather',
      this.weatherService.myLocationFiveDaysWeather
    );

    //this.checkLength = this.title.length > 30 ? true : false;
    // this.weatherService.myLocationFiveDaysWeather.subscribe(
    //   (fiveDaysWeather) => {
    //     console.log(fiveDaysWeather);
    //     this.weatherObject = fiveDaysWeather;

    //     this.checkLength = this.weatherObject.title.length > 30 ? true : false;
    //   }
    // );
    // console.log(this.checkLength, 'leangth');
  }
  checkTitle() {
    // console.log(typeof this.weatherObject);
    // if (this.weatherObject.title.length > 20) {
    //   return true;
    // }
    // return false;
  }
}
