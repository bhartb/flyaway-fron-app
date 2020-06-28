import { Component, OnInit } from '@angular/core';
import { Flightsearch } from '../flightsearch';
import { FlightsearchService } from '../flightsearch.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookurflight',
  templateUrl: './bookurflight.component.html',
  styleUrls: ['./bookurflight.component.css']
})
export class BookurflightComponent  {
private flightsearch:Flightsearch;
  constructor(private service:FlightsearchService,private router:Router) { 

    this.flightsearch=new Flightsearch();

  }

  bookurflight(){
    this.service.bookurflight(this.flightsearch).subscribe(data=>{
    this.flightsearch=new Flightsearch();
    this.router.navigate(['/bookurflight'])
    });


  }

  
}
