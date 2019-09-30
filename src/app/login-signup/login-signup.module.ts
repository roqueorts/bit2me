import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { Login2faComponent } from './login2fa/login2fa.component';
import { LoginComponent } from './login/login.component';
import { SignupService } from './signup/signup.service';
import { Login2faService } from './login2fa/login2fa.service';
import { LoginService } from './login/login.service';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../shared/app-material.module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    LoginComponent,
    Login2faComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AppMaterialModule
  ],
  providers: [LoginService, Login2faService, SignupService]
})
export class LoginSignupModule { }
