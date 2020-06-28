import { Component, OnInit } from '@angular/core';
import { Tripregstndetail } from '../tripregstndetail';
import {TripregstndetailService} from '../tripregstndetail.service'
import { Bookingsummary } from '../bookingsummary';
import { BookingsummaryService } from '../bookingsummary.service';

@Component({
  selector: 'app-bookingsummarybyid',
  templateUrl: './bookingsummarybyid.component.html',
  styleUrls: ['./bookingsummarybyid.component.css']
})
export class BookingsummarybyidComponent implements OnInit {

private bookingsummary:Bookingsummary;

  constructor(private service:BookingsummaryService) { }

  ngOnInit() {

this.service.getbookingsummarybyid().subscribe(data=>{
this.bookingsummary=data;

});

  }

}
