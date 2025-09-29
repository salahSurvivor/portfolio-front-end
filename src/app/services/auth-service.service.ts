import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private readonly baseUrl = environment.apiUrl;
  private readonly loginApi = `${this.baseUrl}/users/`;

  constructor(private readonly http: HttpClient,
              private readonly jwthelper: JwtHelperService){}

  login(data){
    return this.http.post<{ token: string }>(this.loginApi, data);
  }

  logout(){
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean{
    const token = localStorage.getItem('token');
    return !this.jwthelper.isTokenExpired(token);
  }

  isAdmin(): boolean{
    const decodeToken = this.jwthelper.decodeToken(localStorage.getItem('token'));
    return decodeToken.isAdmin;
  }
}
