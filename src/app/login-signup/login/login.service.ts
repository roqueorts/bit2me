import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CommonFunctionsService } from '../../shared/services/common-functions.service';
import { Login } from './login.response';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http: HttpClient, private commonFunctionsService: CommonFunctionsService) { }

  checkLoginPassword(email: string, password: string): Observable<Login> {
    return this.http.get<Login>(`/assets/login.json/?email=${email}?password=${password}`).pipe(
      catchError(this.commonFunctionsService.handleError<Login>('login', { verified: false, errorCode: 2 }))
    );
  }
}
