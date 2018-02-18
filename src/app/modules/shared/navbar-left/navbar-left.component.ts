import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-left',
  templateUrl: './navbar-left.component.html',
  styleUrls: ['./navbar-left.component.scss']
})
export class NavbarLeftComponent implements OnInit {
  menu = [
    { icon: 'book', name: 'Laws' },
    { icon: 'star', name: 'Favorites' },
    { icon: 'date_range', name: 'Calendar' },
    { icon: 'settings', name: 'Config' }
  ];

  constructor() {}

  ngOnInit() {}
}
