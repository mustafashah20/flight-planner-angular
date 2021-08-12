import { Component, OnInit } from '@angular/core';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faPaperPlane = faPaperPlane;
  citiesActive: Boolean = true;
  flightsActive: Boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClickCities() {
    this.citiesActive = true;
    this.flightsActive = false;
  }

  onClickFlights() {
    this.citiesActive = false;
    this.flightsActive = true;
  }
}
