import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-tab',
  templateUrl: './app-tab.component.html',
  styleUrls: ['./app-tab.component.css'],
})
export class AppTabComponent implements OnInit {
  constructor() {}
  title = 'weather-app-angular';
  links = ['#100', '#101', '#102'];
  titles = ['Tab A', 'Tab B', 'Tab C'];
  activeLink = this.links[1];
  myColor = 'primary';
  routerLink1 = '/favorites';
  routerLink2 = '/homepage';
  primary = 'primary';
  ngOnInit(): void {}
}
