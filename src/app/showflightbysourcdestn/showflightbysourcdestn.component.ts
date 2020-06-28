import { Component, OnInit } from '@angular/core';
import { Flightlist } from '../flightlist';
import { FlightlistService } from '../flightlist.service';


@Component({
  selector: 'app-showflightbysourcdestn',
  templateUrl: './showflightbysourcdestn.component.html',
  styleUrls: ['./showflightbysourcdestn.component.css']
})
export class ShowflightbysourcdestnComponent implements OnInit {

  private flightlist:Flightlist[];
  constructor(private service:FlightlistService) { 

   

  }
  ngOnInit(){

    this.service.getFlightsBySrcDestn().subscribe(data=>{
      this.flightlist=data;
     
      });
  
  }
 

}
