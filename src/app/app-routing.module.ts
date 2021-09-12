import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TestingComponent } from './testing/testing.component';

const routes: Routes = [
  {"path":"admin",component:AdminComponent},
  {"path":"test",component:TestingComponent},
  {"path":"index",component:IndexComponent},
  { "path": 'products', component: ProductListComponent },
  //{ path: 'products/:productId', component: ProductDetailsComponent }
  { path: 'cart', component: CartComponent },
  {"path":"checkout","component":CheckoutComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
