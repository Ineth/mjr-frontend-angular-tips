import { Component, OnInit } from '@angular/core';

// import json from './data.json';
// import * as clone from 'clone';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Tenerife';
  users = [
    { id: 1, name: 'Peter' },
    { id: 2, name: 'Bert' },
    { id: 2, name: 'Ann' },
  ];

  ngOnInit() {
    // console.log(json);
    // throw new Error('bad bad bad');
  }
}
