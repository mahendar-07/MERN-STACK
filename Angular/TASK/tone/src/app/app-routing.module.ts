import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { UserdataComponent } from './userdata/userdata.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'user',component:DashboardComponent,
    children:[{path:'products',component:ProductsComponent},
    {path:'orders',component:OrdersComponent},
    {path:'wishlist',component:WishlistComponent},
    {path:'home',component:HomeComponent},
    {path:'userdata',component:UserdataComponent}] }

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
