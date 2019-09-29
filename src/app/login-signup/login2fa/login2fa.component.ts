import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Login2faService } from './login2fa.service';
import { Login2fa } from './login2fa.response';
import { Router } from '@angular/router';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-login2fa',
  templateUrl: './login2fa.component.html',
  styleUrls: ['./login2fa.component.scss']
})
export class Login2faComponent implements OnInit {

  public incorrecto = false;
  constructor(
    public dialogRef: MatDialogRef<Login2faComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public code: string,
    private login2faservice: Login2faService, private router: Router) {

  }

  ngOnInit() {
  }
  close() {
    this.dialogRef.close();
  }

  verificar() {
    console.log(this.code);
    this.login2faservice.verification(this.code).subscribe((result: Login2fa) => {
      console.log('Resultado verificacion con token: ', result.token);
      if (result.verified) { // Navegaríamos a la home usando token en las headers de las requests
        this.router.navigate(['/home']); // Se pondría canActivate en el path usando Authservice para que no se pueda entrar
        this.close();
      } else if (result.errorCode === 1) {
        this.incorrecto = true;
      }

    });

  }
}
