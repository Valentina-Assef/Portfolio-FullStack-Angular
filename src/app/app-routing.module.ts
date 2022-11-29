import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { PrincipalComponent } from './componentes/principal/principal.component';

const routes: Routes = [
  {path: 'principal', component: PrincipalComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: '/principal', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
