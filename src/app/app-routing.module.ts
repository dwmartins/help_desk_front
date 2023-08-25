import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NewPasswordComponent } from './components/new-password/new-password.component';
import { NavegationComponent } from './components/navegation/navegation.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChamadosComponent } from './components/chamados/chamados.component';
import { NewCalledComponent } from './components/new-called/new-called.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'nova-senha', component: NewPasswordComponent},
  {
    path: 'app',
    component: NavegationComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'chamados', component: ChamadosComponent},
      {path: 'novo-chamado', component: NewCalledComponent},
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
    ]
  },
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', redirectTo: '/login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
