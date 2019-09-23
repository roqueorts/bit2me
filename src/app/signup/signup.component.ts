import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Signup } from './signup.model';
import { SignupService } from './signup.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public typeInput: string;
  public fontIcon: string;
  public signupForm;
  public emailFormControl;
  private user: Signup;
  private enhorabuena: string;
  private cuentaCreada: string;

  constructor(
    private formBuilder: FormBuilder, private signupservice: SignupService, private router: Router,
    private translate: TranslateService) {
    this.typeInput = 'password';
    this.fontIcon = 'fa-eye';
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
    this.user = new Signup();
  }

  ngOnInit() {
  }

  get email() { return this.signupForm.get('email'); }
  get password() { return this.signupForm.get('password'); }

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
    this.user.email = loginData.email;
    this.user.password = loginData.password;
    this.signupservice.signUp(this.user).subscribe((result: Signup) => {
      if (result.registered) { // Navegamos al login
        // alert('Cuenta creada');
        this.translate.get(['enhorabuena', 'cuentaCreada']).pipe(take(1)).subscribe((resultado: any) => {
          this.enhorabuena = resultado.enhorabuena;
          this.cuentaCreada = resultado.cuentaCreada;
        });

        Swal.fire(
          this.enhorabuena,
          this.cuentaCreada,
          'success'
        );

        this.router.navigate(['/login']); // Se pondría canActivate en el path usando Authservice para que no se pueda entrar directamente
      }

    });

  }

}
