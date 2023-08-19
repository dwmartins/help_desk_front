import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/users/User';
import { UserNewPassword } from 'src/app/models/users/UserNewPassword';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private API = environment.API

  constructor(private httpClient: HttpClient) { }

  creteNewUser(user: User) {
    return this.httpClient.post<User>(`${this.API}/novo-usuario`, user);
  }

  userLogin(user: User) {
    return this.httpClient.post<User>(`${this.API}/login`, user);
  }

  userReqNewPassword(email: string) {
    return this.httpClient.post<UserNewPassword>(`${this.API}/solicita-nova-senha`, email);
  }

  userCompareCode(user: UserNewPassword) {
    return this.httpClient.post<UserNewPassword>(`${this.API}/compare-codigo-senha`, user);
  }

  userNewPassword(user: UserNewPassword) {
    return this.httpClient.post<UserNewPassword>(`${this.API}/nova-senha`, user);
  }
}
