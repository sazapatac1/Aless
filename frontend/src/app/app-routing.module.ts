import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { DeniedComponent} from './components/denied/denied.component'


const routes: Routes = [
  {path:'', redirectTo:'/auth/login', pathMatch:'full'},
  {path:'auth', loadChildren: './components/auth/auth.module#AuthModule'},
  {path: 'home', component: ProductsComponent},
  {path: 'denied',component:DeniedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
