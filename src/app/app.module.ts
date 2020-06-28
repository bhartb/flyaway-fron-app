import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookurflightComponent } from './bookurflight/bookurflight.component';
import { TripregstndetailComponent } from './tripregstndetail/tripregstndetail.component';
import { FlightlistComponent } from './flightlist/flightlist.component';
import { FlightidComponent } from './flightid/flightid.component';
import { BookingsummarybyidComponent } from './bookingsummarybyid/bookingsummarybyid.component';
import { ShowflightbysourcdestnComponent } from './showflightbysourcdestn/showflightbysourcdestn.component';
import { PlacesService } from './places.service';
import { FlightlistService } from './flightlist.service';
import { FlightsearchService } from './flightsearch.service';
import { TripregstndetailService } from './tripregstndetail.service';
import { BookingsummaryService } from './bookingsummary.service';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'



@NgModule({
  declarations: [
    AppComponent,
    BookurflightComponent,
    TripregstndetailComponent,
    FlightlistComponent,
    FlightidComponent,
    BookingsummarybyidComponent,
    ShowflightbysourcdestnComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PlacesService,FlightlistService,FlightsearchService,TripregstndetailService,BookingsummaryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
