import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { IpMapService } from '../services/ip-map.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor(private ipMapService:IpMapService, private http: HttpClient) { }
  title = 'Get Geolocation';
  ipToSearch:any = "";
  latitude:any;
  longitude:any;
  isp:string = '';
  city:string = '';
  country:string = '';
  timezone: string = '';

  submitted = false;
  
  ngOnInit(): void {
  }
  
  search(ipToSearch:any){
    // console.log(ipToSearch)
    this.ipMapService.getGEOLocation(ipToSearch).subscribe(res => {
      console.log(res);
    })

  }
    
  }


  // //this.visitorsService.getIpAddress().subscribe(res => {

  //   this.ipaddress = res['ip'];
  //   this.visitorsService.getGEOLocation(this.ipaddress).subscribe(res => {

  //     this.latitude = res['latitude'];
  //     this.longitude = res['longitude'];
  //     this.currency = res['currency']['code'];
  //     this.currencysymbol = res['currency']['symbol'];
  //     this.city = res['city'];
  //     this.country = res['country_code3'];
  //     this.isp = res['isp'];
  //     console.log(res);
  //   });