import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookurflightComponent } from './bookurflight/bookurflight.component';
import { ShowflightbysourcdestnComponent } from './showflightbysourcdestn/showflightbysourcdestn.component';
import { FlightlistComponent } from './flightlist/flightlist.component';
import { FlightidComponent } from './flightid/flightid.component';
import { TripregstndetailComponent } from './tripregstndetail/tripregstndetail.component';
import { BookingsummarybyidComponent } from './bookingsummarybyid/bookingsummarybyid.component';


const routes: Routes = [

{path:"bookurflight",component:BookurflightComponent},
{path:"flightbysourcdestn",component:ShowflightbysourcdestnComponent},
{path:"flightlist",component:FlightlistComponent},
{path:"flightlistbyid",component:FlightidComponent},
{path:"tripregstndetail",component:TripregstndetailComponent},
{path:"bookingsummarybyid",component:BookingsummarybyidComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
