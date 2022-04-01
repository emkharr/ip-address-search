import { IpMapService } from './../ip-map.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

   constructor(
      private ipMapService:IpMapService
   ){ };

   title = 'Get client IP';
  clientIP:string = '';

   ngOnInit(){

      this.getIp();
   }
   getIp (){
     this.ipMapService.getIpAddress().subscribe((res:any)=>{
       this.clientIP=res.ip
     })
   }
};