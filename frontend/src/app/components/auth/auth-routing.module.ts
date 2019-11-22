import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
//import { ProductsComponent } from '../products/products.component';


const routes: Routes = [
  {path: 'login', component:  LoginComponent},
  {path: 'signup', component:  SignupComponent},
  //{path: 'home', component:  ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
