import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsComponent } from 'src/app/shared/alerts/alerts.component';
import { SpinnerComponent } from 'src/app/shared/spinner/spinner.component';



@NgModule({
  declarations: [
    AlertsComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlertsComponent,
    SpinnerComponent
  ]
})
export class SharedModule { }
