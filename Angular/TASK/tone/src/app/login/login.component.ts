import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username:any;
  password:any;
  reqpwd:any;
  constructor(private load:Router){}
  checklogin(){
    this.reqpwd=this.username.slice(0,3)+"123";
    if(this.password==this.reqpwd){
      alert("login sucess")
      localStorage.setItem("userloggedin",this.username);
      this.load.navigateByUrl("/user/products");

    }
    else{
      alert("username or password is incorrect")
    }
  }
}
