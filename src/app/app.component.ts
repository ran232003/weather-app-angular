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
    if (!this.myLocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        this.myLocation = true;
        console.log(pos);
        this.weatherService.setMyLocation({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });
      });
    }
  }
}
