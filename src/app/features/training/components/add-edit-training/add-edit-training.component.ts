import { Component } from '@angular/core';
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-add-edit-training',
  templateUrl: './add-edit-training.component.html',
  styleUrls: ['./add-edit-training.component.css']
})
export class AddEditTrainingComponent {
  title = $localize `Add a training`;
  trainingForm = this.fb.group({
    name: [''],
    date: [''],
    duration: [''],
    avgHeartRate: ['']
  });

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    console.log(this.trainingForm)
  }
}
