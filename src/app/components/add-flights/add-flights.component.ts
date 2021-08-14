import { PopupEditFlightComponent } from './../popup-edit-flight/popup-edit-flight.component';
import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/interfaces/City';
import { Flight } from 'src/app/interfaces/Flight';
import { CityService } from 'src/app/services/city.service';
import { FlightService } from 'src/app/services/flight.service';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-flights',
  templateUrl: './add-flights.component.html',
  styleUrls: ['./add-flights.component.css']
})
export class AddFlightsComponent implements OnInit {
  flightOrigin: string;
  flightDestination: string;
  flightCost: number;
  cities: City[];
  flights: Flight[];
  faTrash = faTrash;
  faEdit = faEdit;

  constructor(private cityService: CityService, private flightService: FlightService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.cityService.getCities().subscribe((cities => {
      this.cities = cities;
    }))
    this.flightService.getFlights().subscribe((flights => {
      this.flights = flights;
    }))
  }

  onClickAddFlight() {
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

    this.createFlight(newFlight);

    this.flightOrigin = 'Select City';
    this.flightDestination = 'Select City';
    this.flightCost = null;
  }

  createFlight(flight: Flight) {
    this.flightService.addFlight(flight).subscribe((res) => {
      alert(res.origin + " to " + res.destination + " flight added!");
      this.flights.push(res);
    })
  }

  onClickDeleteFlight(id: string) {
    this.flightService.deleteFlight(id).subscribe((res) => {
      this.flights = this.flights.filter(flight => flight._id !== res._id)
    })
  }

  onClickUpdateFlight(id: string) {
    this.dialog.open(PopupEditFlightComponent, {
      data: {
        flightID: id,
      }
    }).afterClosed().subscribe((res: Flight) => {
      const index = this.flights.findIndex(item => item._id === res._id);
      console.log(index)
      this.flights.splice(index, 1, res);
    })
  }

}
