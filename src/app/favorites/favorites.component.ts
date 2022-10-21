import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../services/favorite.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  constructor(private favoriteService: FavoriteService) {}
  favoritesArray: any = [];
  ngOnInit(): void {
    this.favoritesArray = this.favoriteService.favoriteArray;
    this.favoriteService.favoritesArraySubject.subscribe((favArray) => {
      this.favoritesArray = favArray;
    });
    console.log('this.favoritesArray', this.favoritesArray);
  }
}
