import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'server/auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = ""
  password = ""
  an_array = [
    {"email": "pepe1@com.au", "password": "fgm"},
    {"email": "pepe2@com.au", "password": "fbm"},
    {"email": "pepe3@com.au", "password": "fom"}
  ]

  constructor(private router:Router, private authservice: AuthService) { }

  ngOnInit() {
  }

  buttonClicked(){
    this.authservice.login(this.email, this.password).subscribe(data=>{
      const json_data = JSON.stringify(data)
      if(data.valid === true){
        this.router.navigateByUrl('/account');
      }else{
        alert("Email and password were incorrect")
      }
      sessionStorage.setItem("currentUserData", json_data);
    }, (err: HttpErrorResponse)=>{
      alert("Email and password were incorrect")
    })
  }

  matchInputs(emailAdd, pass, array){
    var i;
    for (i = 0; i < array.length; i++){
      if (array[i].email === emailAdd && array[i].password === pass) {
        return true;
      }
    }
    return false
  }


}
