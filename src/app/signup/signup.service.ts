import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CommonFunctionsService } from '../shared/services/common-functions.service';
import { Signup } from './signup.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  public httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private commonFunctionsService: CommonFunctionsService) { }

  signUp(user: Signup): Observable<Signup> {
    // Aquí haríamos un post
    return this.http.get<Signup>('/assets/signup.json/').pipe(
      catchError(this.commonFunctionsService.handleError<Signup>('signup', { registered: false, errorCode: 2, email: '', password: '' }))
    );
    /*return this.http.post<Signup>('/assets/signup.json/', user, this.httpOptions).pipe(
      catchError(this.commonFunctionsService.handleError<Signup>('signup', { registered: false, errorCode: 2, email: '', password: '' }))
    );*/
  }
}
