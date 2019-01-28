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

  getRequests(stylistId: String): Array<Request> {
      let requests = [];
      this.httpClient.get<Array<Request>>('/api/booking/v1/stylist/' + stylistId + '/pending').subscribe(
          requestList => requests = requestList
      );

      return requests;
  }

  completedTasks(requestId: String, accepted: boolean): Request {
      let request;
      this.httpClient.put('/api/booking/v1/completed-tasks/' + requestId + '/' + accepted, accepted).subscribe(
          requests => request = requests
      );

      return request;
  }
}
