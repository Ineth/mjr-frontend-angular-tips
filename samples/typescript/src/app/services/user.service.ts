import { Injectable } from '@angular/core';
import { AppComponent } from 'app/app.component';

@Injectable()
export class UserService {
  constructor() {
    console.log(AppComponent);
  }
}
