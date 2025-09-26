import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Portfolio } from '../models/portfolio';
import { Category } from '../models/category';
import { Message } from 'primeng/api';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class DashboardService {
  private readonly baseUrl = environment.apiUrl; // ✅ baseUrl configurable
  private readonly urlApi = `${this.baseUrl}/portfolio/`;
  private readonly categoryApi = `${this.baseUrl}/category/`;
  private readonly msgApi = `${this.baseUrl}/msg/`;
  private readonly emailApi = `${this.baseUrl}/send/`;
  private readonly cvApi = `${this.baseUrl}/cv/`;
  private readonly uploadApi = `${this.baseUrl}/upload`;
  constructor(private readonly http: HttpClient){}

  /**********Portfolio Section************/
  createPortfolio(data): Observable<Portfolio>{
    return this.http.post<Portfolio>(this.urlApi, data);
  }

  readPortfolio(): Observable<Portfolio[]>{
    return this.http.get<Portfolio[]>(this.urlApi);
  }

  updatePortfolio(data: Portfolio): Observable<Portfolio>{
    return this.http.put<Portfolio>(this.urlApi + data._id, data)
  }

  deletePortfolio(data: Portfolio): Observable<Portfolio>{
    return this.http.delete<Portfolio>(this.urlApi + data._id);
  }

  upload(data): Observable<any>{
    return this.http.post<any>('http://localhost:3000/upload', data);
  }

  /***********Category Section***********/
  createCategory(data): Observable<Category>{
    return this.http.post<Category>(this.categoryApi, data);
  }

  readCategory(): Observable<Category[]>{
    return this.http.get<Category[]>(this.categoryApi);
  }

  /***********Message Section***********/
  createMessage(data): Observable<Message>{
    return this.http.post<Message>(this.msgApi, data);
  }
  
  readMessage(): Observable<Message[]>{
    return this.http.get<Message[]>(this.msgApi);
  }

  sendEmail(data): Observable<any>{
    return this.http.post<any>(this.emailApi, data)
  }

  /************Cv Section**************/
  createCv(data): Observable<Category>{
    return this.http.post<Category>(this.cvApi, data);
  }
  
  readCv(): Observable<Category[]>{
    return this.http.get<Category[]>(this.cvApi);
  }

  updateCv(data): Observable<Category>{
    return this.http.put<Category>(this.cvApi + data._id, data);
  }
}
