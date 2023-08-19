import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent {
  reqfetchEmail: FormGroup;
  reqCodePassword: FormGroup;
  newPassword: FormGroup;
  isEditable: boolean = false;

  codeValid: boolean = false;
  emalValid: boolean = false

  user_id!: number;
  code_id!: number;

  loadSpinner: boolean = false;
  passwordChek: boolean = true;

  alert: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private reqNewPassword: UserService,
    private router: Router
  ) {
    this.reqfetchEmail = this.formBuilder.group({
      user_email: ['', [Validators.required, Validators.email]]
    });

    this.reqCodePassword = this.formBuilder.group({
      code: ['', Validators.required],
      user_id: ['']
    });

    this.newPassword = this.formBuilder.group({
      new_password: ['', [Validators.required]],
      confirm_password: ['', [Validators.required]],
      user_id: [''],
      code_id: ['']

    })
  }

  fetchEmail() {
    
    if(this.reqfetchEmail.valid) {
      this.loadSpinner = true;
      this.emalValid = true;

      this.reqNewPassword.userReqNewPassword(this.reqfetchEmail.value).subscribe((response) => {
        this.loadSpinner = false;
        if(response.success) {
          this.alerts('success', response.msg);

          this.user_id = response.user_id;

          this.reqCodePassword.controls['user_id'].setValue(this.user_id);
          this.newPassword.controls['user_id'].setValue(this.user_id);
        } else {
          this.alerts('info', response.alert);
          this.loadSpinner = false;
        }

      }, (error) => {
        this.alerts('error', 'Erro ao buscar o e-mail.')
        console.log(`ERRO: ${error}`);
        
        this.emalValid = false;
        this.loadSpinner = false;
      })
    } else {
      this.alerts('info', 'Preencha seu e-mail.');
    }
  }

  comparePassword() {
    this.loadSpinner = true;

    if(this.reqCodePassword.valid) {

      this.reqNewPassword.userCompareCode(this.reqCodePassword.value).subscribe((response) => {
        this.loadSpinner = false;
        if(response.success) {
          this.alerts('success', response.msg);
          this.codeValid = true;

          this.code_id = response.code_id;
          this.newPassword.controls['code_id'].setValue(this.code_id);

        } else {
          this.alerts('info', response.alert);
        }

      }, (error) => {
        this.loadSpinner = false;
        this.alerts('error', 'Erro ao validar o código')
        console.log(`ERRO: ${error}`);
      })
    } else {
      this.alerts('info', 'Preencha o código.');
    }
  }

  updatePassword() {
    this.loadSpinner = true;

    if(this.newPassword.valid) {

      if(this.newPassword.value.new_password === this.newPassword.value.confirm_password) {

        this.reqNewPassword.userNewPassword(this.newPassword.value).subscribe((response) => {
          this.loadSpinner = false;
          if(response.success) {
            this.alerts('success', response.msg);
            this.passwordChek = false;
            setTimeout(() => {
              this.router.navigate(['/login']);
            }, 3000);
          }
  
        }, (error) => {
          this.alerts('error', 'Erro ao atualizar a senha')
          console.log(`ERRO: ${error}`);
          this.loadSpinner = false;
        })
      } else {
        this.loadSpinner = false;
        this.alerts('info', 'As senhas fornecidas não coincidem');
      }

    } else {
      this.alerts('info', 'Preencha os campos.');
    }
  }

  alerts(type: string, description: string) {
    this.alert.push({
      type: type,
      description: description
    })
  }
}
