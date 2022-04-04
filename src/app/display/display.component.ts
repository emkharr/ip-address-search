import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

   constructor(
      
   ){ };

   ngOnInit(){

      
   }
  //  getLocation (){

  //     this.ipMapService.getIpAddress().subscribe(res => {
   
  //       this.ipaddress = res['ip'];
  //       this.ip.getGEOLocation(this.ipaddress).subscribe(res => {
   
  //         this.latitude = res.location['latitude'];
  //         this.longitude = res.location['longitude'];
  //         this.currency = res['currency']['code'];
  //         this.currencysymbol = res['currency']['symbol'];
  //         this.city = res['city'];
  //         this.country = res['country_code3'];
  //         this.isp = res['isp'];
  //         console.log(res);
  //       });
  //    )
    //  this.ipMapService.getIpAddress().subscribe((res:any)=>{
    //    this.clientIP=res.ip

    
//    }

//    
//    }
// }

};