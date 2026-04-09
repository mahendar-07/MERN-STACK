import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrl: './userdata.component.css'
})
export class UserdataComponent {
  constructor(private u:DataService){}
  udata:any;
  ngOnInit(){
    this.u.getusers().subscribe((res)=>{
      this.udata=res;
    })
  }
}
