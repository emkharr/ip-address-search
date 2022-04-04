import { IpMapService } from './../ip-map.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor(private ipMapService:IpMapService) { }
  title = 'Get Geolocation';
  ip:any;
  latitude:any;
  longitude:any;
  isp:string = '';
  city:string = '';
  country:string = '';
  timezone: string = '';

  ngOnInit(): void {
    this.getLocation();
  }
  private getLocation(){
    
  }

}
