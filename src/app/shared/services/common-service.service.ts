import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor(private httpClient: HttpClient) { }

  loginUser (payload:any) {
    return this.httpClient.post('https://reqres.in/api/login',payload);
  }

  getUserData(headers: HttpHeaders) {
    return this.httpClient.get('https://reqres.in/api/login', {headers});
  }
}
