import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  userData;
  constructor() { }

  ngOnInit() {
    if(typeof(Storage) !== "undefined"){
      console.log("Storage ready");
      this.userData = JSON.parse(sessionStorage.getItem("currentUserData"));
      console.log("data:", this.userData)
    }else{
      console.log("No Storage Support");
    }
  }

}
