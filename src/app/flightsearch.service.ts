import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Flightsearch } from './flightsearch';

@Injectable({
  providedIn: 'root'
})
export class FlightsearchService {
private url:string;
  constructor(private http:HttpClient) { 
this.url="http://localhost:9005/flyaway/bookurflight";


  }

  public bookurflight(flightsearch:Flightsearch){
    return this.http.post<Flightsearch>(this.url,flightsearch)
  }

 

}
