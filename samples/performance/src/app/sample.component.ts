import 'rxjs/add/observable/timer';

import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sample',
  template: `
    <div class="cmp">
      <h2>Sample</h2>
      <ul>
        <li *ngFor="let user of users">
          {{user.id}} - {{user.name}}
        </li>
      </ul>

      <button (click)="onClick()">Click</button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.Default,
  styles: ['.cmp { border: green 2px solid; }'],
})
export class SampleComponent implements OnInit {
  @Input() users;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {}

  onClick() {
    console.log('click');
  }
}
