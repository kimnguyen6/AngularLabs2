import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  email = ""
  birthdate = ""
  username = ""
  age = 0
  userData;
  constructor(private router: Router) { }

  ngOnInit() {
    if(typeof(Storage) !== "undefined"){
      console.log("Storage ready");
      this.userData = JSON.parse(sessionStorage.getItem("currentUserData"));
      console.log("data:", this.userData)
    }else{
      console.log("No Storage Support");
    }
  }

  buttonClicked(){
    if(this.userData.valid === true){
      console.log("valid: ", this.userData.valid)
      var new_data = {"username" : this.username, "birthdate": this.birthdate, "age": this.age, "email": this.email, "valid": this.userData.valid}
      sessionStorage.setItem("currentUserData", JSON.stringify(new_data));
      this.router.navigateByUrl("/account")
    }else if (this.userData.valid === false){
      console.log("valid: ", this.userData.valid)
      this.router.navigateByUrl("/login");
    }
  }

}
