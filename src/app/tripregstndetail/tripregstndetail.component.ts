import { Component, OnInit } from '@angular/core';
import { TripregstndetailService } from '../tripregstndetail.service';
import { Tripregstndetail } from '../tripregstndetail';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tripregstndetail',
  templateUrl: './tripregstndetail.component.html',
  styleUrls: ['./tripregstndetail.component.css']
})
export class TripregstndetailComponent  {

  private tripregstndetail:Tripregstndetail;

  constructor(private service:TripregstndetailService,private router:Router) {
this.tripregstndetail=new Tripregstndetail();

   }

   tripregstndetails(){
     this.service.tripregstndetails(this.tripregstndetail).subscribe(data=>{
     
      this.tripregstndetail=new Tripregstndetail();
      this.router.navigate(['/tripregstndetail'])

     });
   }
}
