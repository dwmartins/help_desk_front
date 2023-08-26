import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Called } from 'src/app/models/called/Called';
import { CalledService } from 'src/app/services/called/called.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  results: boolean = false;
  all_Called: Called[] = [];

  constructor(
    private serviceCalled: CalledService,
    private modal: NgbModal,
  ) {}

  ngOnInit(): void {
    this.getAllCalled();
  }

  getAllCalled() {
    this.serviceCalled.getALL().subscribe((response) => {
      this.all_Called = response;
      console.log(this.all_Called)
    }, (error) => {
      console.log(`ERRO: ${error}`);
    })
  }
}
