import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  getProducts(){
    return this.http.get("https://fakestoreapi.com/products")
  }
  getusers(){
    return this.http.get("https://fakestoreapi.com/users");
  }
}
