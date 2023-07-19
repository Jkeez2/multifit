import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainingsComponent } from "./components/trainings/trainings.component";
import { TrainingsListComponent } from "./components/trainings-list/trainings-list.component";
import { TrainingDetailsComponent } from "./components/training-details/training-details.component";

const routes: Routes = [
  {   path: 'trainings',   component: TrainingsComponent,
    children :[
      { path: 'detail/:id', component: TrainingDetailsComponent },
      { path: 'list', component: TrainingsListComponent },
      { path: '', component: TrainingsListComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule { }
