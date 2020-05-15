import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SocketIoModule, SocketIoConfig} from 'ngx-socket-io';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IndexComponent } from './index/index.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat/chat.component';
import { HouseComponent } from './house/house.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { HouseServicesComponent } from './house/house-services/house-services.component';
import { HouseUsersComponent } from './house/house-users/house-users.component';
import { HouseDetailComponent } from './house/house-detail/house-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { RecievedComponent } from './chat/recieved/recieved.component';
import { SendComponent } from './chat/send/send.component';
import { environment } from 'src/environments/environment';
const config: SocketIoConfig = {url: environment.url, options: {}};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    SidebarComponent,
    LoginComponent,
    ChatComponent,
    HouseComponent,
    ShoppingComponent,
    HouseServicesComponent,
    HouseUsersComponent,
    HouseDetailComponent,
    RecievedComponent,
    SendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
