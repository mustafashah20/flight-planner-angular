import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/interfaces/City';
import { Flight } from 'src/app/interfaces/Flight';
import { CityService } from 'src/app/services/city.service';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-flight-plan',
  templateUrl: './flight-plan.component.html',
  styleUrls: ['./flight-plan.component.css']
})
export class FlightPlanComponent implements OnInit {
  flightOrigin: string;
  flightDestination: string;
  cities: City[];
  flightPlan: Flight[];
  totalCost: any = 0;
  showTable: Boolean = false;
  showPlaceholder: Boolean = true;
  message: String;

  constructor(private cityService: CityService, private flightService: FlightService) { }

  ngOnInit(): void {
    this.cityService.getCities().subscribe((cities => {
      this.cities = cities;
    }))

    this.message = 'Generate flight plan with origin & destination';
  }

  onClickGeneratePlan() {
    if (!this.flightOrigin || !this.flightDestination) {
      alert('Select origin and destination!');
      return
    }

    if (this.flightOrigin === 'Select Origin' || this.flightDestination === 'Select Destination') {
      alert('Select origin and destination!');
      return
    }

    this.getFlightPlan();

    this.flightOrigin = 'Select Origin';
    this.flightDestination = 'Select Destination';

  }

  getFlightPlan() {
    this.totalCost = 0;
    this.flightService.getFlightPlan(this.flightOrigin, this.flightDestination).subscribe((flights) => {
      if (flights.length > 0) {
        this.flightPlan = flights;
        flights.map((flight) => {
          this.totalCost += flight.cost
        })

        this.showTable = true;
        this.showPlaceholder = false;
      }
      else{
        this.message = "No Flights Found!"
        this.showTable = false;
        this.showPlaceholder = true;
      }

    })
  }

}
