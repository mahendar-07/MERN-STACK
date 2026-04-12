import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private nav:Router){}
password:any;
username:any;
reqpwd:any;
checklogin(){
this.reqpwd=this.username.slice(0,3)+"123";
if(this.password==this.reqpwd){
  localStorage.setItem("userlogged",this.username);
  alert("Login successfull")
  this.nav.navigateByUrl("/user/products")
}
else{
  alert("incorect pasword/username")
}
}
}
