import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalModule } from '../global.module';

import { ChatRoutingModule } from './chat-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ChatroomPage } from './pages/chatroom/chatroom.page';

import { CChatroomComponent } from './containers/c-chatroom/c-chatroom.component';



@NgModule({
  declarations: [
    ChatroomPage,
    CChatroomComponent
  ],
  imports: [
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    GlobalModule,
    ChatRoutingModule
  ]
})
export class ChatModule { }
