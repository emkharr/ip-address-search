import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
 
  providedIn: 'root'
})
export class IpMapService {

  constructor(private http:HttpClient) {
  }
  // public getIpAddress() {
  //   return this.http
  //         .get('https://api.ipify.org?format=json')
  // } 

  public getGEOLocation(ipSearch: any) {
 
  let url = environment.IP_API_URL+environment.IP_API_KEY+environment.IP_LOOKUP
    return this.http
          .get(url+ipSearch)
  };
};