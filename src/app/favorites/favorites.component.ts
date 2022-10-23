import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavoriteService } from '../services/favorite.service';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  constructor(
    private favoriteService: FavoriteService,
    private router: Router,
    private weatherService: WeatherService
  ) {}
  favoritesArray: any = [];
  ngOnInit(): void {
    this.favoritesArray = this.favoriteService.favoriteArray;
    this.favoriteService.favoritesArraySubject.subscribe((favArray) => {
      this.favoritesArray = favArray;
    });
    console.log('this.favoritesArray', this.favoritesArray);
  }
  goToMain(weather: any) {
    console.log('weather', weather);
    this.weatherService.setMyLocationWeather(weather);
    this.router.navigate(['/homepage']);
  }
}
