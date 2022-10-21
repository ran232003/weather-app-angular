import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { AppRouting } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppTabComponent } from './app-tab/app-tab.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ApiService } from './services/api.service';
import { WeatherService } from './services/weather.service';
import { WeatherListComponent } from './weather/weather-list/weather-list.component';
import { WeatherCardComponent } from './weather/weather-card/weather-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { FavoriteService } from './services/favorite.service';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FavoritesComponent,
    AppTabComponent,
    WeatherListComponent,
    WeatherCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    AppRouting,
    MatAutocompleteModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatIconModule,
  ],
  providers: [ApiService, WeatherService, FavoriteService],
  bootstrap: [AppComponent],
})
export class AppModule {}
