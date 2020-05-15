import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IndexComponent } from './index/index.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { CreateComponent } from './poll/create/create.component';
import { ListComponent } from './poll/list/list.component';
import { AnswerComponent } from './poll/answer/answer.component';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat/chat.component';
import { HouseComponent } from './house/house.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { HouseServicesComponent } from './house/house-services/house-services.component';
import { HouseUsersComponent } from './house/house-users/house-users.component';
import { HouseDetailComponent } from './house/house-detail/house-detail.component';
import { RegisterComponent } from './register/register.component';
import { TasksComponent } from './tasks/tasks.component';
import { HouseDashboardComponent } from './house-dashboard/house-dashboard.component';
import { PollComponent } from './poll/poll/poll.component';
import { HttpClientModule } from '@angular/common/http';
import { RecievedComponent } from './chat/recieved/recieved.component';
import { SendComponent } from './chat/send/send.component';

import { FullCalendarModule } from '@fullcalendar/angular';
import { DashboardComponent } from './dashboard/dashboard.component'; // for FullCalendar!

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    SidebarComponent,
    UserDetailComponent,
    UserEditComponent,
    CreateComponent,
    ListComponent,
    AnswerComponent,
    LoginComponent,
    ChatComponent,
    HouseComponent,
    ShoppingComponent,
    HouseServicesComponent,
    HouseUsersComponent,
    HouseDetailComponent,
    RegisterComponent,
    TasksComponent,
    HouseDashboardComponent,
    PollComponent,
    DashboardComponent,
    RecievedComponent,
    SendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    , FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
