import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultifitSpinnerComponent } from './multifit-spinner.component';

describe('MultifitSpinnerComponent', () => {
  let component: MultifitSpinnerComponent;
  let fixture: ComponentFixture<MultifitSpinnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultifitSpinnerComponent]
    });
    fixture = TestBed.createComponent(MultifitSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
