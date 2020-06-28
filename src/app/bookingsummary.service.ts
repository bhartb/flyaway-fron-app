import { Injectable } from '@angular/core';
import { Bookingsummary } from './bookingsummary';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class BookingsummaryService {

  private bookingsummary:Bookingsummary;
  private url:string;

  constructor(private http:HttpClient) {
this.url="http://localhost:9005/flyaway/bookingsummary/spicejet/20"


   }

   public getbookingsummarybyid():Observable<Bookingsummary>{
    return this.http.get<Bookingsummary>(this.url);
  }



}
