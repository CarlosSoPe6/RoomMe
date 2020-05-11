import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat/chat.component';
import { HouseComponent } from './house/house.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'auth/google/redirect', component: LoginComponent},
  {path: 'chat', component: ChatComponent},
  {path: 'house/register', component: HouseComponent},
  {path: 'house/edit', component: HouseComponent},
  {path: 'shopping', component: ShoppingComponent},
  {path: 'register', component: RegisterComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
