import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Login2faComponent } from './login2fa/login2fa.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [{ path: 'login', component: LoginComponent },
{ path: 'login-2fa', component: Login2faComponent },
{ path: 'signup', component: SignupComponent },
{ path: '**', pathMatch: 'full', redirectTo: 'login' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
