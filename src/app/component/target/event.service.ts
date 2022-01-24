import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
    GeneralArrayResponse,
    GeneralBaseResponse
  } from 'src/app/models/generalResponse.model';
import { Router } from '@angular/router';
import { getEndpointURL } from '../../utils';
import { EventItems } from 'src/app/models/models.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  token: string;
  headerOptions: any = null;
  constructor(
    private http: HttpClient,
    private router: Router
  ) {}



getEvents(): Observable<EventItems[]> {
  return this.http
    .get<EventItems[]>(
      getEndpointURL(
        `/unicorns`
      ),
      {
        observe: "response",
        
      }
    )
    .pipe(
      map(response => {
        const data = new GeneralArrayResponse<EventItems>(response.body, EventItems);
        return data.array;
      }),
      catchError(error => {
        return [];
      })
    );
}

getSpecificEvent(uid: string): Observable<EventItems> {
  return this.http
    .get<EventItems>(
      getEndpointURL(
        `/unicorns/${uid}`
      ),
      {
        observe: "response",
        
      }
    )
    .pipe(
      map(response => {
        const data = new EventItems(
                      response.body
                    );
                    return data;
      })
    );
}



  createEvent(eventData: any) {
    return this.http
      .post(
        getEndpointURL(
          `/unicorns`,
        ),
        eventData
      )
      .pipe(
        map(response => {
          return response;
        })
      );
  }

  updateEvent(eventData: any, id: string) {  
    return this.http
      .put(
        getEndpointURL(
          `/unicorns/${id}`,
        ),
        eventData
      )
      .pipe(
        map(response => {
          return response;
        })
      );
  }

  deleteEvent(id: string): Observable<Object> {
    return this.http
      .delete(
        getEndpointURL(
          `/unicorns/${id}`,
        )
      )
      .pipe(
        map(response => { return  response;}),
        catchError(error => {
          return [];
        })
      );
  }


}
