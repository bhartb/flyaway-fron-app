import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http'
import {Tripregstndetail} from './tripregstndetail'

@Injectable({
  providedIn: 'root'
})
export class TripregstndetailService {

  
  private url:string;
  
  constructor(private http:HttpClient) { 
this.url="http://localhost:9005/flyaway/bookurflight/TripRegstnDetail";


  }


  public tripregstndetails(tripregstndetail:Tripregstndetail){
    return this.http.post<Tripregstndetail>(this.url,tripregstndetail)
  }


}
