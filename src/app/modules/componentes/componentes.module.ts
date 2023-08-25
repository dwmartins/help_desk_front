import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { LoginComponent } from 'src/app/components/login/login.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NewPasswordComponent } from 'src/app/components/new-password/new-password.component';
import { NavegationComponent } from 'src/app/components/navegation/navegation.component';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { ChamadosComponent } from 'src/app/components/chamados/chamados.component';
import { NewCalledComponent } from 'src/app/components/new-called/new-called.component';
import { QuillModule } from 'ngx-quill'



@NgModule({
  declarations: [
    LoginComponent,
    NewPasswordComponent,
    NavegationComponent,
    DashboardComponent,
    ChamadosComponent,
    NewCalledComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule,
    QuillModule.forRoot()
  ]
})
export class ComponentesModule { }
