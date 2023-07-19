import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingsListComponent } from './components/trainings-list/trainings-list.component';
import { TrainingService } from "./services/training-service";
import {TrainingsTableComponent} from "./components/trainings-table/trainings-table.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {SharedModule} from "../../shared/shared.module";
import {MatIconModule} from "@angular/material/icon";
import { TrainingDetailsComponent } from './components/training-details/training-details.component';
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import { TrainingRoutingModule } from "./training-routing.module";
import { TrainingsComponent } from './components/trainings/trainings.component';
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    TrainingsListComponent,
    TrainingsTableComponent,
    TrainingDetailsComponent,
    TrainingsComponent
  ],
  exports: [
    TrainingsComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    SharedModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    TrainingRoutingModule,
    MatCardModule
  ],
  providers: [
    TrainingService
  ]
})
export class TrainingModule { }
