import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  username:string
  birthdate:string
  age:number
  email:string
  password:string
  valid:boolean
  constructor(username, birthdate, age, email, password, valid) {
    this.username = username
    this.birthdate = birthdate
    this.age = age
    this.email = email
    this.password = password
    this.valid = valid
  }
}