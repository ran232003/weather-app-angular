import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  myLocation: any;
  constructor(
    private apiService: ApiService,
    private weatherService: WeatherService,
    private router: Router
  ) {}
  options: string[] = [];
  ngOnInit(): void {
    this.weatherService.myLocation.subscribe((location) => {
      console.log(location);
      this.apiService.getMyLocation(location);
    });
    // this.router.events.subscribe((val: any) => {
    //   console.log(val.url);
    // });
  }
}
