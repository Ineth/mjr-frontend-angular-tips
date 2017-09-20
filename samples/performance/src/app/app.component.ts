import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li *ngFor="let item of collection;
                  let i = index">
      {{item.name}} - {{i}}
      </li>
    </ul>
    <button (click)="refreshItems()">Refresh items</button>
    <button (click)="onAddUser()">Add item</button>
    <hr>
    <!-- <sample [users]="collection"></sample><br> -->
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

  refreshItems() {
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

  onAddUser() {
    this.collection.push({
      id: 10,
      name: 'Joske',
    });
  }
}
