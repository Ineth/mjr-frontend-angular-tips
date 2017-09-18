import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1 *ngIf="toggle">
    {{title | capitalise}}
  </h1>
  <sample></sample>
  <button id="button" (click)="onClick()">ClickMe</button>
  `,
})
export class AppComponent {
  title = 'app works!!';
  toggle = true;

  constructor() {}

  onClick() {
    this.toggle = false;
  }
}
