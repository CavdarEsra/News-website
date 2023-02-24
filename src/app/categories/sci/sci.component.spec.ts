import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SciComponent } from './sci.component';

describe('SciComponent', () => {
  let component: SciComponent;
  let fixture: ComponentFixture<SciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SciComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
