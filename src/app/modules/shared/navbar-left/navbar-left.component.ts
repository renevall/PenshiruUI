import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-left',
  templateUrl: './navbar-left.component.html',
  styleUrls: ['./navbar-left.component.scss']
})
export class NavbarLeftComponent implements OnInit {
  menu = [
    { icon: 'book', name: 'Laws', link: '/laws' },
    { icon: 'star', name: 'Favorites', link: '/favorites' },
    { icon: 'date_range', name: 'Calendar', link: '/calendar' },
    { icon: 'settings', name: 'Config', link: '/config' }
  ];

  constructor() {}

  ngOnInit() {}
}
