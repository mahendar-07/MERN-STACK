import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private load:Router){}
  name:any;
  ngOnInit(){
  if(!localStorage.getItem("userloggedin")){
    this.load.navigateByUrl("/")
  }
  this.name=localStorage.getItem("userloggedin");
}
logout(){
  localStorage.removeItem("userloggedin");
  this.load.navigateByUrl("/");
}
}
