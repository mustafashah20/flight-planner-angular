import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { City } from '../interfaces/City';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private rootUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  getCities(): Observable<City[]> {
    const url = `${this.rootUrl}/cities/`;
    return this.http.get<City[]>(url);
  }

  addCity(city: City): Observable<City> {
    const url = `${this.rootUrl}/cities/create`;
    return this.http.post<City>(url, city, httpOptions);
  }

  deleteCity(id: string): Observable<City> {
    const url = `${this.rootUrl}/cities/${id}`;
    return this.http.delete<City>(url);
  }
}
