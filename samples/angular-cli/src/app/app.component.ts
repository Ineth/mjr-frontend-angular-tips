import { Component, OnInit } from '@angular/core';
import * as lodash from 'lodash';

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
    const sorted = lodash.sortBy(this.users, 'name');
    console.log(sorted);
  }
}
