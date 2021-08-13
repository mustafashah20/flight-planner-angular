import { SignupComponent } from './components/signup/signup.component';
import { TravelerHomeComponent } from './components/traveler-home/traveler-home.component';
import { LoginComponent } from './components/login/login.component';
import { AddFlightsComponent } from './components/add-flights/add-flights.component';
import { AddCitiesComponent } from './components/add-cities/add-cities.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'admin-home', component: AdminHomeComponent, canActivate: [AuthGuard], children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'cities'
      },
      {
        path: 'cities',
        component: AddCitiesComponent
      },
      {
        path: 'flights',
        component: AddFlightsComponent
      },
    ]
  },
  { path: 'traveler-home', component: TravelerHomeComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
