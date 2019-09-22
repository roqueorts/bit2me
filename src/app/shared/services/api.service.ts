import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonFunctionsService } from './common-functions.service';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private commonFunctionsService: CommonFunctionsService) { }

  /* get<T>(operation: string, code: string): Observable<T> {
     return this.http.get<T>(`/assets/${operation}.json`, {}).pipe(
       // tap(_ => this.log('fetched heroes')),
       catchError(this.commonFunctionsService.handleError<T>('verification', { verified: false, token: '', errorCode: 2 }))
     );
   }*/
}
