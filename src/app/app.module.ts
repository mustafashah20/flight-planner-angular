import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddCitiesComponent } from './components/add-cities/add-cities.component';
import { AddFlightsComponent } from './components/add-flights/add-flights.component';
import { LoginComponent } from './components/login/login.component';
import { TravelerHomeComponent } from './components/traveler-home/traveler-home.component';
import { FlightPlanComponent } from './components/flight-plan/flight-plan.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminHomeComponent,
    NavbarComponent,
    AddCitiesComponent,
    AddFlightsComponent,
    LoginComponent,
    TravelerHomeComponent,
    FlightPlanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
