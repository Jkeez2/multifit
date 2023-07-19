import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingsTableComponent } from './trainings-table.component';

describe('TrainingsTableComponent', () => {
  let component: TrainingsTableComponent;
  let fixture: ComponentFixture<TrainingsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainingsTableComponent]
    });
    fixture = TestBed.createComponent(TrainingsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
