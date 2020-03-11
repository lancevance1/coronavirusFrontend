import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DrugPoisoningMortality} from './DrugPoisoningMortality';

@Injectable({
  providedIn: 'root'
})
export class HTTPService {
  private Url = 'https://data.cdc.gov/resource/rpvx-m2md.json';  // URL to web api
  constructor( private http: HttpClient,
               ) { }

  /** GET heroes from the server */
  getData(): Observable<DrugPoisoningMortality[]> {
    return this.http.get<DrugPoisoningMortality[]>(this.Url);
  }
}
