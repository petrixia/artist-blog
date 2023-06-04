import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Component, Input } from '@angular/core';

import { HomeComponent } from './home.component';

@Component({
  selector: 'app-menu-title',
  template: '<p>App Menu Title</p>',
})
class MockAppMenuTitle {}

@Component({
  selector: 'app-big-card',
  template: '<p>App Big Card</p>',
})
class MockAppBigCard {
  @Input()
  photoCover: string = '';
  @Input()
  cardTitle: string = '';
  @Input()
  cardDescription: any = '';
  @Input()
  id: string = '0';
}

@Component({
  selector: 'app-small-card',
  template: '<p>App Small Card</p>',
})
class MockAppSmallCard {
  @Input()
  photoCover: string = '';
  @Input()
  cardTitle: string = '';
  @Input()
  Id: string = '0';
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        MockAppMenuTitle,
        MockAppBigCard,
        MockAppSmallCard,
      ],
      imports: [RouterTestingModule]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
