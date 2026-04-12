import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
constructor(private nav:Router){}
ngOnInit(){
  if(!localStorage.getItem("userlogged")){
    this.nav.navigateByUrl("/")
  }
}
logout(){
    localStorage.removeItem("userlogged")
    this.nav.navigateByUrl('');
}
}
