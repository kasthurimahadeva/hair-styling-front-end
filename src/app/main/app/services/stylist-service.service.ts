import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class StylistService {

    constructor( private http: HttpClient ) { }

    registerStylist(token: any): Observable<any>{
        return this.http.post('/api/v1/stylists/', token);
    }

    // searchQuery(token: any): Observable<any>{
    //     return this.http.post('/salon/search-query', token);
    // }
    //
    // setUserDetails(token: any): Observable<any>{
    //     return this.http.post('/salon/user-data', token);
    // }
    //
    // getUserDetails(): Observable<any>{
    //     return this.http.get('/salon/all');
    // }

}
