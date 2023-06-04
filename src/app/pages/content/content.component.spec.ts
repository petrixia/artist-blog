import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ContentComponent } from './content.component';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

describe('ContentComponent', () => {
  let component: ContentComponent;
  let fixture: ComponentFixture<ContentComponent>;

  class ActivatedRouteMock {
    params = new Observable((observer) => {
      const urlParams = { id: 1 };
      observer.next(urlParams);
      observer.complete();
    });
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentComponent],
      imports: [RouterTestingModule],
      providers: [
        ContentComponent,
        {
          provide: ActivatedRoute,
          useClass: ActivatedRouteMock,
        },
      ],
    });
    fixture = TestBed.createComponent(ContentComponent);
    component = fixture.componentInstance;
    component.contentTitle = 'Test';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render content by query param id', () => {
    expect(component.contentTitle).toBe('FLORAL TATTOO IDEAS');
    expect(component.contentDescription).toBe(
      'Floral tattoos are a popular choice for many people due to their beauty and versatility. Flowers have been used in tattoo art for centuries, and today, there are countless styles and designs to choose from. Some people opt for realistic, detailed flowers in full bloom, while others prefer minimalist, abstract depictions. Each flower has its own symbolism, with roses representing love and passion, lotus flowers symbolizing purity and enlightenment, and sunflowers suggesting happiness and positivity. Whether as a standalone design or incorporated into a larger piece, floral tattoos can be a stunning way to express oneself through body art.'
    );
    expect(component.photoCover).toBe(
      'https://catrinatattoo.com/wp-content/uploads/2021/04/tatuagem-feminina-no-ombro-catrinatattoo-estudio-de-tatuagem-zona-leste-rosas-delicadas-1024x585.jpg'
    );
  });
});
