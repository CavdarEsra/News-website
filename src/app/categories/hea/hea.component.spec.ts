import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaComponent } from './hea.component';

describe('HeaComponent', () => {
  let component: HeaComponent;
  let fixture: ComponentFixture<HeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
