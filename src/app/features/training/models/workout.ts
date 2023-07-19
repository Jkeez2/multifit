import { ISport } from "./ISport";
import { WorkoutExercise } from "./workout-exercise";

export interface Workout extends ISport {
  exercices: WorkoutExercise[]
}
