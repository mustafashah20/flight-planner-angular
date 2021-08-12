import { CityService } from './../../services/city.service';
import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/interfaces/City';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-cities',
  templateUrl: './add-cities.component.html',
  styleUrls: ['./add-cities.component.css']
})
export class AddCitiesComponent implements OnInit {
  faTrash = faTrash;
  cityInput: string;
  cities: City[];

  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    this.cityService.getCities().subscribe((cities => {
      this.cities = cities;
    }))
  }

  onClickAddCity() {
    if (!this.cityInput) {
      alert('Please add city name!');
      return
    }

    const newCity: City = {
      name: this.cityInput,
    }

    this.createCity(newCity);

    this.cityInput = '';
  }

  createCity(city: City) {
    this.cityService.addCity(city).subscribe((res) => {
      this.cities.push(res)
    })
  }

  onClickDeleteCity(id: string) {
    this.cityService.deleteCity(id).subscribe((res) => {
      this.cities = this.cities.filter(city => city._id !== res._id)
    })
  }

}
