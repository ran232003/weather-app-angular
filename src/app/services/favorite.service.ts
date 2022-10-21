//api key : 6jAYLwBpvKKB9w73VnO2DEAN2sPyGGpL
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Weather } from '../models/WeatherModel';
//api key : 6jAYLwBpvKKB9w73VnO2DEAN2sPyGGpL
@Injectable({ providedIn: 'root' })
export class FavoriteService {
  favoritesArraySubject = new Subject<[]>();
  favoriteArray: any = [];

  addToFavirite(weather: any): boolean {
    let check = this.favoriteArray.find((element: any) => {
      return element.key === weather.key;
    });
    console.log(check, 'check');
    if (!check) {
      this.favoriteArray.push(weather);
      this.favoritesArraySubject.next(this.favoriteArray);
      return true;
    } else {
      this.removeFavorite(weather);
      return false;
    }
  }
  removeFavorite(weather: any) {
    this.favoriteArray = this.favoriteArray.filter((element: any) => {
      return element.key !== weather.key;
    });
    this.favoritesArraySubject.next(this.favoriteArray);
  }
}
