import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LoginComponent } from './login.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogRef, MatDialogContainer } from '@angular/material';
import { LoginService } from './login.service';
import { TranslateService, TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from 'src/app/shared/app-material.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Login2faComponent } from '../login2fa/login2fa.component';
import { SignupComponent } from '../signup/signup.component';
import { Observable, from, empty, of, throwError } from 'rxjs';
import { HttpLoaderFactory } from 'src/app/app.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { OverlayRef } from '@angular/cdk/overlay';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { element } from 'protractor';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let servicio: LoginService;
  let translate: TranslateService;
  let http: HttpTestingController;
  let dialog: MatDialog;
  let controlEmail;
  let controlPassword;
  const loginData = {};
  let fixture: ComponentFixture<LoginComponent>;
  const dialogRefSpyObj = jasmine.createSpyObj({ afterClosed: of({}), close: null });
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent, Login2faComponent, SignupComponent],
      imports: [
        HttpClientTestingModule,
        CommonModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        }),
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AppMaterialModule
      ],
      providers: [LoginService, TranslateService]
    })
      .compileComponents();
  }));

  beforeEach(() => {

    translate = TestBed.get(TranslateService);
    http = TestBed.get(HttpTestingController);
    servicio = TestBed.get(LoginService);
    dialog = TestBed.get(MatDialog);
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('Debe crear el componente', async(() => {
    expect(component).toBeTruthy();
  }));

  it('Debe crear el formulario con dos campos', () => {
    expect(component.loginForm.contains('email')).toBeTruthy();
    expect(component.loginForm.contains('password')).toBeTruthy();
  });

  it('El email y password deben de ser obligatorios', () => {
    controlEmail = component.loginForm.get('email');
    controlPassword = component.loginForm.get('password');
    controlEmail.setValue('');
    controlPassword.setValue('');
    expect(controlEmail.valid).toBeFalsy();
    expect(controlPassword.valid).toBeFalsy();
  });

  it('El email y password deben de ser validos', () => {
    controlEmail = component.loginForm.get('email');
    controlPassword = component.loginForm.get('password');
    controlEmail.setValue('gfjh');
    controlPassword.setValue('123');
    expect(controlEmail.valid).toBeFalsy();
    expect(controlPassword.valid).toBeFalsy();
  });

  it('Init: Debe de cargar el título', () => {

    spyOn(translate, 'stream').and.callFake(() => {
      return from(['Log In']);
    }
    );
    component.ngOnInit();
    expect(component.tituloLogin).toBe('Log In');

  });

  it('onSubmit: Debe de llamar a checkLoginPassword ', () => {

    const spy = spyOn(servicio, 'checkLoginPassword').and.callFake(resp => {
      return empty();
    }
    );
    controlEmail = component.loginForm.get('email');
    controlPassword = component.loginForm.get('password');
    controlEmail.setValue('gfjh@test.com');
    controlPassword.setValue('12345');
    component.onSubmit(loginData);
    expect(spy).toHaveBeenCalled();

  });

  it('onSubmit: Debe devolver un login verificado y abrir un Modal ', () => {

    const spy = spyOn(servicio, 'checkLoginPassword').and.returnValue(from([{ verified: true, errorCode: 0 }]));
    const spyDialog = spyOn(component.dialog, 'open').and.returnValue(dialogRefSpyObj);
    controlEmail = component.loginForm.get('email');
    controlPassword = component.loginForm.get('password');
    controlEmail.setValue('gfjh@test.com');
    controlPassword.setValue('12345');
    component.onSubmit(loginData);
    expect(spyDialog).toHaveBeenCalled();
  });
  it('ngOnInit: tituloLogin debe estar en un h2', () => {

    const compiled = fixture.debugElement.nativeElement;
    const elemento: HTMLElement = fixture.debugElement.query(By.css('h2')).nativeElement;
    expect(elemento.innerHTML).toContain('tituloLogin');
    expect(compiled.querySelector('h2').textContent).toContain('tituloLogin');
  });


});
