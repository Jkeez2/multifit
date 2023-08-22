import {Component, Input} from '@angular/core';
import {Workout} from "../../models/workout";

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent {
  @Input() workoutTraining : Workout;

  displayedColumns: string[] = ['index', 'weight', 'repetitions'];

}
