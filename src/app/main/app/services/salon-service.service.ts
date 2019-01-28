import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {SalonModel} from '../modules/salon/booking-stylist/salon.model';
import {Stylist} from '../modules/salon/search-stylist/stylist.model';
 
@Injectable()
export class SalonService {
 
  constructor( private http: HttpClient ) { }
 
  registerSalon(token: any): Observable<any>{
    return this.http.post('/api/v1/salons/create', token);
  }
 
  getSalonDetails(email: String): SalonModel {
      let salon;

      this.http.get<SalonModel>(`/api/v1/salons/find/${email}`).subscribe(
          salonDetails => salon = salonDetails
      );
      return salon;
  }
 
}
