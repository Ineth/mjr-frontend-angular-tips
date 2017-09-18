import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { CapitalisePipe } from './pipes/capitalisePipe';

describe('AppComponent', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [
          AppComponent,
          CapitalisePipe, // pipes need to be included!
        ],
        schemas: [NO_ERRORS_SCHEMA],
      }).compileComponents();
    }),
  );

  it(
    'should create the app',
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    }),
  );

  it(
    `should have as title 'app works!'`,
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.title).toEqual('app works!!');
    }),
  );

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('APP WORKS!');
  });

  it('should hide h1 when button clicked', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const el = fixture.debugElement.nativeElement;
    expect(el.querySelector('h1')).not.toBeNull();

    el.querySelector('#button').click();
    fixture.detectChanges();
    expect(el.querySelector('h1')).toBeNull();
  });

  it('should render correctly', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    //
    // add snapshot testing here
    //
  });
});
