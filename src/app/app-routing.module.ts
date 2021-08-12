import { LoginComponent } from './components/login/login.component';
import { AddFlightsComponent } from './components/add-flights/add-flights.component';
import { AddCitiesComponent } from './components/add-cities/add-cities.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'admin-home', component: AdminHomeComponent, children: [
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
