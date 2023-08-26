import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/users/User';
import { CalledService } from 'src/app/services/called/called.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-called',
  templateUrl: './new-called.component.html',
  styleUrls: ['./new-called.component.css']
})
export class NewCalledComponent implements OnInit{
  @ViewChild('sessionExpired', { static: true }) sessionExpired!: ElementRef;

  user!: User;

  formNewCalled: FormGroup;

  loadSpinner: boolean = false;
  alert: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private serviceCalled: CalledService,
    private modal: NgbModal
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
    } else {
      this.modal.open(this.sessionExpired, { centered: true });
      setTimeout(() => {
        this.modal.dismissAll(this.sessionExpired);
        this.router.navigate(['/login']);
      }, 3000);
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

  redirectLogin() {
    this.modal.dismissAll(this.sessionExpired);
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 500);
  }

  alerts(type: string, description: string) {
    this.alert.push({
      type: type,
      description: description
    })
  }
}
