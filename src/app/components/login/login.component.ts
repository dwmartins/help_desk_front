import { Component, OnInit } from '@angular/core';
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
export class LoginComponent implements OnInit{
  user!: User;
  formLogin: FormGroup;

  showPassword: string = 'password';
  eye: string = 'bi bi-eye';

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

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData() {
    const user = localStorage.getItem('user_login');
    if(user) {
      this.user = JSON.parse(user) as User;
      if(this.user.user_token) {
        this.router.navigate(['/app']);
      }
    }
  }

  submitForm() {
    if(this.formLogin.valid) {
      this.loadSpinner = true;
      
      this.login.userLogin(this.formLogin.value).subscribe((response) => {
      this.loadSpinner = false;

        if(response.success) {
          this.setLocalStorage(response);
          this.alerts('success', 'Login realizado com sucesso.');
          setTimeout(() => {
            this.router.navigate(['/app']);
          }, 1500);
          
        } else if(response.alert) {
          this.alerts('info', response.alert)
        }
      }, (error) => {
        console.log(`ERRO: ${error}`);
        this.alerts('error', 'Erro ao realizar o login.');
        this.loadSpinner = false;
      })
    } else {
      this.alerts('info', 'Preencha todos os campos.')
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

  viePassword() {
    this.showPassword = (this.showPassword === "text") ? "password" : (this.showPassword === "password") ? "text" : this.showPassword
    this.eye = (this.eye === "bi bi-eye") ? "bi bi-eye-slash" : (this.eye === "bi bi-eye-slash") ? "bi bi-eye" : this.eye;
  }

  alerts(type: string, description: string) {
    this.alert.push({
      type: type,
      description: description
    })
  }

}
