import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalModule } from '../global.module';

import { ChatRoutingModule } from './chat-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ChatroomPage } from './pages/chatroom/chatroom.page';
import { CreateChatPage } from './pages/create-chat/create-chat.page';
import { JoinChatPage } from './pages/join-chat/join-chat.page';

import { CChatroomComponent } from './containers/c-chatroom/c-chatroom.component';
import { CCreateChatComponent } from './containers/c-create-chat/c-create-chat.component';
import { CJoinChatComponent } from './containers/c-join-chat/c-join-chat.component';



@NgModule({
  declarations: [
    ChatroomPage,
    CreateChatPage,
    JoinChatPage,
    CChatroomComponent,
    CCreateChatComponent,
    CJoinChatComponent
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
