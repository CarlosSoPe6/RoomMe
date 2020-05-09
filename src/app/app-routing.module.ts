import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { HouseComponent } from './house/house.component';
import { ShoppingComponent } from './shopping/shopping.component';



const routes: Routes = [{path: 'chat', component: ChatComponent},
                        {path: 'house/register', component: HouseComponent},
                        {path: 'house/edit', component: HouseComponent},
                      {path: 'shopping', component: ShoppingComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
