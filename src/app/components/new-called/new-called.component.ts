import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/users/User';
import { CalledService } from 'src/app/services/called/called.service';

@Component({
  selector: 'app-new-called',
  templateUrl: './new-called.component.html',
  styleUrls: ['./new-called.component.css']
})
export class NewCalledComponent implements OnInit{

  user!: User;

  formNewCalled: FormGroup;

  loadSpinner: boolean = false;
  alert: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private serviceCalled: CalledService
  ) {
    this.formNewCalled = this.formBuilder.group({
      user_id: [''],
      titulo: ['', Validators.required],
      descricao: ['', Validators.required],
      prioridade: ['', Validators.required],
      categoria: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData() {
    const user = localStorage.getItem('user_login');
    if(user) {
      this.user = JSON.parse(user) as User;
    }
  }

  submitForm() {
    this.formNewCalled.controls['user_id'].setValue(this.user.user_id);
    if(this.formNewCalled.valid) {
      this.loadSpinner = true;
        this.serviceCalled.newCalled(this.formNewCalled.value).subscribe((response) => {
          this.loadSpinner = false;
          if(response.success) {
            this.formNewCalled.reset();
            this.alerts('success', response.msg);
          } else {
            this.alerts('error', response.msg);
          }
        }, (error) => {
          this.alerts('error', 'Erro ao abrir o chamado.');
          this.loadSpinner = false;
          console.log(`ERRO: ${error}`);
        });
    } else {
      this.alerts('info', 'Preencha todos os campos.');
      this.formNewCalled.markAllAsTouched();
    }
  }

  alerts(type: string, description: string) {
    this.alert.push({
      type: type,
      description: description
    })
  }
}
