import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface user{
  email: string;
  birthdate: string;
  age: number;
  username: string;
  valid: boolean;

}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(email: string, password:string){
    return this.http.post<user>('/api/auth', {email: email, password: password});
  }

}