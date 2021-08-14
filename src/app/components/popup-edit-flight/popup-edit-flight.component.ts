import { FlightService } from 'src/app/services/flight.service';
import { Flight } from './../../interfaces/Flight';
import { CityService } from './../../services/city.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { City } from 'src/app/interfaces/City';

@Component({
  selector: 'app-popup-edit-flight',
  templateUrl: './popup-edit-flight.component.html',
  styleUrls: ['./popup-edit-flight.component.css']
})
export class PopupEditFlightComponent implements OnInit {
  flightID: string;
  cities: City[];
  flightOrigin: String;
  flightDestination: String;
  flightCost: Number;

  constructor(@Inject(MAT_DIALOG_DATA) public data,
    private cityService: CityService,
    private flightService: FlightService,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<PopupEditFlightComponent>
    ) {
    this.flightID = data.flightID;
  }

  ngOnInit(): void {
    this.cityService.getCities().subscribe((cities => {
      this.cities = cities;
    }))
    this.flightService.getFlightById(this.flightID).subscribe((flight: Flight) => {
      this.flightOrigin = flight.origin;
      this.flightDestination = flight.destination;
      this.flightCost = flight.cost;
    })
  }

  onClickUpdateFlight() {
    if (!this.flightOrigin || !this.flightDestination || !this.flightCost) {
      alert('Please enter flight origin, destination & cost!');
      return
    }
    if (this.flightOrigin === 'Select City' || this.flightDestination === 'Select City') {
      alert('Please enter flight origin, destination & cost!');
      return
    }

    const newFlight: Flight = {
      origin: this.flightOrigin,
      destination: this.flightDestination,
      cost: this.flightCost,
    }

    this.updateFlight(newFlight);
  }

  updateFlight(flight: Flight) {
    this.flightService.updateFlight(this.flightID, flight).subscribe((flight) => {
      this.dialogRef.close(flight);
    })
  }

  onClickCancel() {
    this.dialog.closeAll()
  }

}
