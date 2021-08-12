import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/interfaces/City';
import { CityService } from 'src/app/services/city.service';

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

  constructor(private cityService: CityService) { }

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

    //todo -- add flight

    this.flightOrigin = 'Select City';
    this.flightDestination = 'Select City';
    this.flightCost = null;
  }

}
