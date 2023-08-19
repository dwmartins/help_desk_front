import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/models/users/User';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formLogin: FormGroup;

  showPassword: string = 'password';
  eye: string = 'eye';

  alert: any[] = [];
  loadSpinner: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private login: UserService,
    private _snackBar: MatSnackBar
  ) {
    this.formLogin = this.formBuilder.group({
      user_email: ['', [Validators.required, Validators.email]],
      user_password: ['', Validators.required]
    })
  }

  submitForm() {
    if(this.formLogin.valid) {
      
      this.login.userLogin(this.formLogin.value).subscribe((response) => {
      this.loadSpinner = false;

        if(response.success) {
          this.setLocalStorage(response);
          
        } else if(response.alert) {
        }
      }, (error) => {
        console.log(`ERRO: ${error}`);
      })
    } else {
      this.formLogin.markAllAsTouched();
    }
  }

  setLocalStorage(user: User) {
    const userRes = {
      user_id: user.userData.user_id,
      user_nome: user.userData.user_nome,
      user_sobrenome: user.userData.user_sobrenome,
      user_email: user.userData.user_email,
      user_tipo: user.userData.user_tipo,
      user_foto: user.userData.user_foto,
      user_token: user.user_token
    }
    const userData = JSON.stringify(userRes);
    localStorage.setItem('user_login', userData);
  }

}
