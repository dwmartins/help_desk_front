import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-called',
  templateUrl: './new-called.component.html',
  styleUrls: ['./new-called.component.css']
})
export class NewCalledComponent {

  formNewCalled: FormGroup;

  editorContent: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.formNewCalled = this.formBuilder.group({
      user_id: ['1'],
      titulo: ['', Validators.required],
      descricao: ['', Validators.required],
      prioridade: ['', Validators.required],
      categoria: ['', Validators.required]
    });
  }

  submitForm() {
    if(this.formNewCalled.valid) {
      console.log('valido');
      console.log(this.formNewCalled.value);
      this.formNewCalled.reset();
    } else {
      console.log('não validado');
      this.formNewCalled.markAllAsTouched();
    }
  }
}
