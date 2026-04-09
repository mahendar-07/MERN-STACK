import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
constructor(private s:DataService){}
products:any;

lowtohigh(){
 this.products.sort((a:any,b:any)=>a.price-b.price)
}
hightolow(){
  this.products.sort((a:any,b:any)=>b.price-a.price)
}
ngOnInit(){
  this.s.getProducts().subscribe((res)=>{
    this.products=res;
  })
}
}
