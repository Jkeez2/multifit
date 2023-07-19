import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultifitSpinnerComponent } from './components/multifit-spinner/multifit-spinner.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { ArrayToStringPipe } from './pipes/array-to-string/array-to-string.pipe';

@NgModule({
  declarations: [
    MultifitSpinnerComponent,
    ArrayToStringPipe
  ],
  exports: [
    MultifitSpinnerComponent,
    ArrayToStringPipe
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ]
})
export class SharedModule {}
