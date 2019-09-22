import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Login2faComponent } from '../login2fa/login2fa.component';
import { LoginService } from './login.service';
import { Login } from './login.model';
// import { switchMap } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public activeLang = 'en';
  public typeInput: string;
  public fontIcon: string;
  public loginForm;
  public emailFormControl;
  public incorrecto: boolean;

  private result: boolean;
  private verificationCode: string;

  constructor(
    private formBuilder: FormBuilder, public dialog: MatDialog, private loginService: LoginService,
    private translate: TranslateService) {
    this.translate.setDefaultLang(this.activeLang);
    this.typeInput = 'password';
    this.fontIcon = 'fa-eye';
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
    this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
    this.verificationCode = '';
    this.incorrecto = false;
  }

  ngOnInit() {
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  public cambiarLenguaje(lang) {
    this.activeLang = lang;
    this.translate.use(lang);
  }

  changeType() {
    if (this.typeInput === 'password') {
      this.fontIcon = 'fa-eye-slash';
      this.typeInput = 'text';
    } else {
      this.typeInput = 'password';
      this.fontIcon = 'fa-eye';
    }
  }

  onSubmit(loginData) {
    console.log(loginData);
    // if (this.loginForm.valid) {
    this.loginService.checkLoginPassword(loginData.email, loginData.password).subscribe((result: Login) => {
      console.log(result.verified);
      if (result.verified) {
        this.incorrecto = false;
        const dialogRef = this.dialog.open(Login2faComponent, {
          height: '400px',
          width: '600px',
          data: this.verificationCode
        } as MatDialogConfig);
        dialogRef.afterClosed().subscribe(code => {
        });
      } else if (result.errorCode === 1) {
        this.incorrecto = true;
      }
    });
    // }


  }
}
