import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultifitSpinnerComponent } from './components/multifit-spinner/multifit-spinner.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
  declarations: [
    MultifitSpinnerComponent
  ],
  exports: [
    MultifitSpinnerComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ]
})
export class SharedModule { }
