import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {Stylist} from '../modules/salon/search-stylist/stylist.model';

const rootStylistsUrl = '/api/v1/stylists/';

@Injectable()
export class StylistService {


    constructor( private http: HttpClient ) { }

    registerStylist(token: any): Observable<any>{
        return this.http.post(`${rootStylistsUrl}create`, token);
    }

    // searchQuery(token: any): Observable<any>{
    //     return this.http.post('/salon/search-query', token);
    // }
    //
    // setUserDetails(token: any): Observable<any>{
    //     return this.http.post('/salon/user-data', token);
    // }
    //

    searchStylistsBySkill(skill: String): Array<Stylist> {
        let stylistsList = [];

        this.http.get<Array<Stylist>>(`${rootStylistsUrl}search/${skill}`).subscribe(
            stylists => stylistsList = stylists
        );
        return stylistsList;
    }

    getStylistsList(): Subject<Stylist> {
        const subject = new Subject<Stylist>();

        this.http.get<Stylist>(rootStylistsUrl).subscribe(
            stylists => subject.next(stylists),
            err => {
                subject.error(err);
                // this.toastr.error('Unable to get provider list', 'Fetch failed', {progressBar: true});
            }
            ,
            () => subject.complete()
        );
        return subject;
    }

}
