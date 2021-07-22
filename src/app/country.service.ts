
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { country } from "src/app/country"

@Injectable({
  providedIn: 'root'
})
export class countryService {

  private baseUrl = 'http://localhost:8080/springboot-crud-app/rest/v2/countries';

  constructor(private http: HttpClient) { }

  getCountry(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCountry(country: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, country);
  }

  updateCountry(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCountry(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getCountriesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}