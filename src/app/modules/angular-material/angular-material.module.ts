import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule
  ],
  exports: [
    MatInputModule,
    MatSnackBarModule
  ]
})
export class AngularMaterialModule { }
