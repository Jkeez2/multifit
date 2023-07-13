import { Component } from '@angular/core';
import {ThemePalette} from "@angular/material/core";

@Component({
  selector: 'app-multifit-spinner',
  templateUrl: './multifit-spinner.component.html',
  styleUrls: ['./multifit-spinner.component.css']
})
export class MultifitSpinnerComponent {
  color: ThemePalette = 'primary';
}
