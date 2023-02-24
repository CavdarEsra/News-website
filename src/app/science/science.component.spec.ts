import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsService } from '../service/news.service';
import { scienceComponent } from './science.component';

describe('ScienceComponent', () => {
  let component: scienceComponent;
  let fixture: ComponentFixture<scienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ scienceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(scienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
