import { Component, OnInit } from '@angular/core';

import { Training } from "../../models/training";
import { TrainingService } from "../../services/training-service";

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings-list.component.html',
  styleUrls: ['./trainings-list.component.css']
})
export class TrainingsListComponent {
  title = $localize `my trainings`;
  fetchingTrainings: boolean = true;
  constructor(private trainingService: TrainingService) {}
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
