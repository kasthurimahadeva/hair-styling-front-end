import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
 
@Injectable()
export class SalonService {
 
  constructor( private http: HttpClient ) { }
 
  registerSalon(token: any): Observable<any>{
    return this.http.post('/api/v1/salons/create', token);
  }
 
  searchQuery(token: any): Observable<any>{
    return this.http.post('/salon/search-query', token);
  }
 
  setUserDetails(token: any): Observable<any>{
    return this.http.post('/salon/user-data', token);
  }
 
  getUserDetails(): Observable<any>{
    return this.http.get('/salon/all');
  }
 
}
