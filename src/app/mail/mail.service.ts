import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mail } from './models/mail.interface';
import { Observable } from 'rxjs';

@Injectable()
export class MailService {
  BASE_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  getMassages() {
    return this.http.get(`${this.BASE_URL}/messages`);
  }

  getMassage(id: number): Observable<any> {
    return this.http.get(`${this.BASE_URL}/messages/${id}`);
  }

  getFolder(folderName: string): Observable<Mail[]> {
    return this.http.get(`${this.BASE_URL}/messages?folder=${folderName}`) as Observable<Mail[]>;
  }
}
