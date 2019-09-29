import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login-signup/login/login.component';
import { Login2faComponent } from './login-signup/login2fa/login2fa.component';
import { SignupComponent } from './login-signup/signup/signup.component';

const routes: Routes = [{ path: 'login', component: LoginComponent },
{ path: 'login-2fa', component: Login2faComponent },
{ path: 'signup', component: SignupComponent },
{
  path: 'home',
  loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
},
{ path: '**', pathMatch: 'full', redirectTo: 'login' }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
