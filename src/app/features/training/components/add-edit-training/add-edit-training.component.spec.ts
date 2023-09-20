import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTrainingComponent } from './add-edit-training.component';

describe('AddEditTrainingComponent', () => {
  let component: AddEditTrainingComponent;
  let fixture: ComponentFixture<AddEditTrainingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditTrainingComponent]
    });
    fixture = TestBed.createComponent(AddEditTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
