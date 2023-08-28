import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Called } from 'src/app/models/called/Called';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CalledService {

  private API = environment.API;

  constructor(private http: HttpClient) { }

  newCalled(called: Called) {
    return this.http.post<Called>(`${this.API}/chamados/novo-chamado`, called)
  }

  getALL() {
    return this.http.get<Called[]>(`${this.API}/chamados/todos-chamados`);
  }
}
