import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private httpClient: HttpClient) {
  }

  book(data: any): Observable<any> {
      return this.httpClient.post('/api/booking/v1/request', data);
  }
}
