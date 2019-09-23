import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { Login2faComponent } from './login2fa/login2fa.component';
import { SignupComponent } from './signup/signup.component';
import { LoginService } from './login/login.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Login2faService } from './login2fa/login2fa.service';
import { ApiService } from './shared/services/api.service';
import { CommonFunctionsService } from './shared/services/common-functions.service';
import { SignupService } from './signup/signup.service';
// Translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Login2faComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [HttpClient]
      }
    })
  ],
  providers: [LoginService, Login2faService, ApiService, CommonFunctionsService, SignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
