import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddCitiesComponent } from './components/add-cities/add-cities.component';
import { AddFlightsComponent } from './components/add-flights/add-flights.component';
import { LoginComponent } from './components/login/login.component';
import { TravelerHomeComponent } from './components/traveler-home/traveler-home.component';
import { FlightPlanComponent } from './components/flight-plan/flight-plan.component';
import { SignupComponent } from './components/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopupEditFlightComponent } from './components/popup-edit-flight/popup-edit-flight.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminHomeComponent,
    NavbarComponent,
    AddCitiesComponent,
    AddFlightsComponent,
    LoginComponent,
    TravelerHomeComponent,
    FlightPlanComponent,
    SignupComponent,
    PopupEditFlightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
