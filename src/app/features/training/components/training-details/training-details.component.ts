import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Training } from "../../models/training";
import { TrainingService } from "../../services/training-service";

@Component({
  selector: 'app-training-details',
  templateUrl: './training-details.component.html',
  styleUrls: ['./training-details.component.css']
})
export class TrainingDetailsComponent implements OnInit {
  training: Training | undefined;
  sportsNames: string[];

  constructor(
    private trainingService: TrainingService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getTraining();
  }

  getTraining() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.trainingService.getTraining(id)
      .subscribe(training => {
        this.training = training;
        this.sportsNames = this.training.sports.map(sport => sport.name);
      });
  }

  goBack(): void {
    this.location.back();
  }
}
