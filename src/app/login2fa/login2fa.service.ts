import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Verified } from './verified.model';
import { catchError, map, tap } from 'rxjs/operators';
import { CommonFunctionsService } from '../shared/services/common-functions.service';
import { ApiService } from '../shared/services/api.service';



@Injectable({
  providedIn: 'root'
})
export class Login2faService {

  constructor(private http: HttpClient, private commonFunctionsService: CommonFunctionsService, private apiService: ApiService) { }

  verification(code: string): Observable<Verified> {
    return this.http.get<Verified>(`/assets/verification.json/?code=${code}`).pipe(
      // tap(_ => this.log('fetched heroes')),
      catchError(this.commonFunctionsService.handleError<Verified>('verification', { verified: false, token: '', errorCode: 2 }))
    );
    // `${this.heroesUrl}/?name=${code}`
    // return this.apiService.get<Verified>('verification', code);
  }
}
