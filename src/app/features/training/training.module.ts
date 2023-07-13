import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingsComponent } from './components/trainings/trainings.component';
import { TrainingService } from "./services/training-service";
import {TrainingsTableComponent} from "./components/trainings-table/trainings-table.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {SharedModule} from "../../shared/shared.module";
import {MatIconModule} from "@angular/material/icon";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    TrainingsComponent,
    TrainingsTableComponent
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
    FontAwesomeModule
  ],
  providers: [
    TrainingService
  ]
})
export class TrainingModule { }
