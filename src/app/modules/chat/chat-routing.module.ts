import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatroomPage } from './pages/chatroom/chatroom.page';
import { CreateChatPage } from './pages/create-chat/create-chat.page';
import { JoinChatPage } from './pages/join-chat/join-chat.page';

const routes: Routes = [
  {
    path: 'room/:id',
    component: ChatroomPage,
  },
  {
    path: 'create',
    component: CreateChatPage,
  },
  {
    path: 'join',
    component: JoinChatPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
