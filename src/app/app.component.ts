import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  myLocation: Boolean = false;
  constructor(private weatherService: WeatherService) {}
  ngOnInit(): void {
    console.log(this.myLocation);
    if (!this.myLocation) {
      console.log('inside if');
      try {
        navigator.geolocation.getCurrentPosition((pos) => {
          this.myLocation = true;
          console.log(pos, 'inside if');
          this.weatherService.setMyLocation({
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
          });
        });
      } catch (error) {
        console.log('error', error);
      }
    }
  }
}
