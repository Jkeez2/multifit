import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Training } from "./features/training/models/training";

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const trainings = [
      { id: 1, name: 'Muscu pec/triceps', duration: '1h 04min', avgHeartRate: '125', date: '18/07/2023',
      sports: [
        { id: 1, name: 'workout', exercices: [
            { name: 'squat', sets: [
                { weight: 70, reps: 10 },
                { weight: 70, reps: 9 },
                { weight: 70, reps: 8 },
                { weight: 70, reps: 7 }
              ]},
            { name: 'curl biceps', sets: [
                { weight: 20, reps: 10 },
                { weight: 20, reps: 10 },
                { weight: 20, reps: 9 },
                { weight: 20, reps: 8 }
              ]},
            { name: 'fentes', sets: [
                { weight: 15, reps: 10 },
                { weight: 15, reps: 10 },
                { weight: 15, reps: 10 },
                { weight: 15, reps: 10 }
              ]},
            { name: 'lombaires machine', sets: [
                { weight: 20, reps: 10 },
                { weight: 20, reps: 10 },
                { weight: 20, reps: 10 },
                { weight: 20, reps: 10 }
              ]},
            { name: 'lever jambes avant', sets: [
                { weight: 50, reps: 10 },
                { weight: 50, reps: 10 },
                { weight: 50, reps: 10 },
                { weight: 50, reps: 10 }
              ]}
          ]},
        { id: 2, name: 'running'}
      ]},
      { id: 2, name: 'Fractionné 30/30' },
      { id: 3, name: 'Séance jambes' },
      { id: 4, name: 'Séance dos/biceps' },
      { id: 5, name: 'Basket' },
      { id: 6, name: 'Footing' },
      { id: 7, name: 'Foot' },
      { id: 8, name: 'Séance pec/triceps' },
      { id: 9, name: 'Fractionné 15x200m' }
    ];
    return {trainings};
  }

  // Overrides the genId method to ensure that a training always has an id.
  // If the trainings array is empty,
  // the method below returns the initial number (1).
  // if the heroes array is not empty, the method below returns the highest
  // training id + 1.
  genId(trainings: Training[]): number {
    return trainings.length > 0 ? Math.max(...trainings.map(hero => hero.id)) + 1 : 1;
  }
}
