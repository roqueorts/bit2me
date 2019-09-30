import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Login2fa } from './login2fa.response';
import { catchError, map, tap } from 'rxjs/operators';
import { CommonFunctionsService } from '../../shared/services/common-functions.service';
import { ApiService } from '../../shared/services/api.service';



@Injectable({
  providedIn: 'root'
})
export class Login2faService {

  constructor(private http: HttpClient, private commonFunctionsService: CommonFunctionsService, private apiService: ApiService) { }

  verification(code: string): Observable<Login2fa> {
    return this.http.get<Login2fa>(`/assets/verification.json/?code=${code}`).pipe(
      // tap(_ => this.log('fetched heroes')),
      catchError(this.commonFunctionsService.handleError<Login2fa>('verification', { verified: false, token: '', errorCode: 2 }))
    );
    // `${this.heroesUrl}/?name=${code}`
    // return this.apiService.get<Verified>('verification', code);
  }
}
