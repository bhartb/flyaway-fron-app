import { Injectable } from '@angular/core';
import {Flightlist} from './flightlist'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {NgModule} from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class FlightlistService {
private flightlist:Flightlist[];
  private url:string;
  constructor(private http:HttpClient) { 
this.url="http://localhost:9005/flyaway/bookurflight/kolkata/ranchi";

  }
  public getFlightsBySrcDestn():Observable<Flightlist[]>{
    return this.http.get<Flightlist[]>(this.url+"/");
  }

 
  public getFlightsById(id:number):Observable<Flightlist[]>{
    return this.http.get<Flightlist[]>(this.url+"/");
  }

  
}

