import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat/chat.component';
import { HouseComponent } from './house/house.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { RegisterComponent } from './register/register.component';
import { TasksComponent } from './tasks/tasks.component';
import { HouseDashboardComponent } from './house-dashboard/house-dashboard.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'auth/google/redirect', component: LoginComponent},
  {path: 'chat', component: ChatComponent, canActivate: [AuthGuardService]},
  {path: 'house/register', component: HouseComponent, canActivate: [AuthGuardService]},
  {path: 'house/edit', component: HouseComponent, canActivate: [AuthGuardService]},
  {path: 'shopping', component: ShoppingComponent, canActivate: [AuthGuardService]},
  {path: 'register', component: RegisterComponent},
  {path: 'tasks', component: TasksComponent, canActivate: [AuthGuardService]},
  {path: 'home', component: HouseDashboardComponent, canActivate: [AuthGuardService]}
  , {path: 'me', component: UserEditComponent, canActivate: [AuthGuardService]}
  , {path: 'usr/:id', component: UserDetailComponent, canActivate: [AuthGuardService]}
  , {path: '', component: HouseDashboardComponent, canActivate: [AuthGuardService]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
