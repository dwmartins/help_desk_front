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
  all_Called: Called[] = [];
  pending_Called: Called[] = [];
  running_Called: Called[] = [];
  finishing_Called: Called[] = [];

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
      this.filterCalledByStatus();

      console.log(this.all_Called)
    }, (error) => {
      console.log(`ERRO: ${error}`);
    })
  }

  filterCalledByStatus() {
    this.pending_Called = this.all_Called.filter(called => called.status == 'Pendente');
    this.running_Called = this.all_Called.filter(called => called.status == 'Execução');
    this.finishing_Called = this.all_Called.filter(called => called.status == 'Finalizado');
  }
}
