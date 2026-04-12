import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { ViewComponent } from './view/view.component';
import { ManageComponent } from './manage/manage.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'user',component:DashboardComponent,
    children:[
      {path:'products',component:ProductsComponent},
      {path:'view',component:ViewComponent},
      {path:'manage',component:ManageComponent},
      {path:'home',component:HomeComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
