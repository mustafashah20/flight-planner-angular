import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/interfaces/City';
import { Flight } from 'src/app/interfaces/Flight';
import { CityService } from 'src/app/services/city.service';
import { FlightService } from 'src/app/services/flight.service';

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

  constructor(private cityService: CityService, private flightService: FlightService) { }

  ngOnInit(): void {
    this.cityService.getCities().subscribe((cities => {
      this.cities = cities;
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
    })
  }

}
