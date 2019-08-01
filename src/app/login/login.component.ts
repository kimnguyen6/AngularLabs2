import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  users = [
    {email: "pepe@thefrog.com", password: "feelsgoodman"},
    {email: "pepe2@thefrog.com", password: "feelsbadman"},
    {email: "pepe3@thefrog.com", password: "feelsokayman"}
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  itemClicked(){
    for(let i = 0; i < this.users.length; i++){
      if (
        this.email == this.users[i].email &&
        this.password == this.users[i].password
      )
      {
        this.router.navigateByUrl("/account")
        alert("Login Success");
      }
    }
  }
}
