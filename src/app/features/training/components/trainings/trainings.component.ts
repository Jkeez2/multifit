import { Component, OnInit } from '@angular/core';

import { Training } from "../../models/training";
import { TrainingService } from "../../services/training-service";

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent {
  fetchingTrainings: boolean = true;
  constructor(private trainingService: TrainingService) {}

  title = $localize `my trainings`;
  trainings: Training[] = [];

  ngOnInit(): void {
    this.getTrainings();
  }

  getTrainings(): void {
    this.trainingService.getTrainings()
      .subscribe(trainings => {
        this.trainings = trainings;
        this.fetchingTrainings = false;
      });
  }
}
