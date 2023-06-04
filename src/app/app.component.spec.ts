import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';
@Component({
  selector: 'app-menu-bar',
  template: '<p>App Menu Bar</p>',
})
class MockAppMenuBar {}

@Component({
  selector: 'router-outlet',
  template: '<p>Router Outlet</p>',
})
class MockRouterOutlet {}

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, MockAppMenuBar, MockRouterOutlet],
    });
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
