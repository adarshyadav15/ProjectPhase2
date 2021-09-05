import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { TestingComponent } from './testing/testing.component';

const routes: Routes = [
  {"path":"admin",component:AdminComponent},
  {"path":"test",component:TestingComponent},
  {"path":"index",component:IndexComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
