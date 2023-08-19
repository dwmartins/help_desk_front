import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ComponentesModule } from './modules/componentes/componentes.module';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { SharedModule } from './modules/shared/shared.module';
import { NewPasswordComponent } from './components/new-password/new-password.component';

@NgModule({
  declarations: [
    AppComponent,
    NewPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ComponentesModule,
    AngularMaterialModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
