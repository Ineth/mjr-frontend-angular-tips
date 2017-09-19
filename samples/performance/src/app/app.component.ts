import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li *ngFor="let item of collection;
                  let i = index">
      {{item.name}} - {{i}}
      </li>
    </ul>
    <button (click)="getItems()">Refresh items</button>
  `,
})
export class AppComponent {
  collection;

  constructor() {
    this.collection = [
      { id: 1, name: 'foo' },
      { id: 2, name: 'bar' },
      { id: 3, name: 'biz' },
    ];
  }

  getItems() {
    this.collection = this.getItemsFromServer();
  }

  getItemsFromServer() {
    return [
      { id: 1, name: 'foo' },
      { id: 2, name: 'bar' },
      { id: 3, name: 'biz' },
      { id: 4, name: 'zimma' },
    ];
  }

  trackByFn(index, item) {
    return index;
  }
}
