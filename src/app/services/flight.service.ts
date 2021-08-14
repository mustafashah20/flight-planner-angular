import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Flight } from '../interfaces/Flight';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private rootUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  getFlights(): Observable<Flight[]> {
    const url = `${this.rootUrl}/flights/`;
    return this.http.get<Flight[]>(url);
  }

  getFlightById(id: string): Observable<Flight> {
    const url = `${this.rootUrl}/flights/${id}`;
    return this.http.get<Flight>(url);
  }

  addFlight(flight: Flight): Observable<Flight> {
    const url = `${this.rootUrl}/flights/create`;
    return this.http.post<Flight>(url, flight, httpOptions);
  }

  updateFlight(id: string, flight: Flight): Observable<Flight> {
    const url = `${this.rootUrl}/flights/${id}`;
    return this.http.patch<Flight>(url, flight, httpOptions);
  }

  deleteFlight(id: string): Observable<Flight> {
    const url = `${this.rootUrl}/flights/${id}`;
    return this.http.delete<Flight>(url);
  }

  getFlightPlan(origin: string, destination: string): Observable<Flight[]> {
    const url = `${this.rootUrl}/flights/plan/${origin}/${destination}`;
    return this.http.get<Flight[]>(url);
  }

}
