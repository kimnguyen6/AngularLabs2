import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Week';
  userData;

  constructor(private router: Router){

  }

  ngOnInit() {
    if(typeof(Storage) !== "undefined"){
      console.log("Storage ready");
      this.userData = JSON.parse(sessionStorage.getItem("currentUserData"));
      console.log("data:", this.userData)
    }else{
      console.log("No Storage Support");
    }
  }

  goProfile(){
    this.userData = JSON.parse(sessionStorage.getItem("currentUserData"));
    if(this.userData.valid === true){
      this.router.navigateByUrl("/profile")
    }else{
      this.router.navigateByUrl("/login")
    }
  }

  logout(){
    sessionStorage.clear();
    this.router.navigateByUrl("/login");
  }
}
