import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Training } from "./features/training/models/training";

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const trainings = [
      { id: 1, name: 'Muscu pec/triceps' },
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
