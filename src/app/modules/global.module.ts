import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MainMenuOptionComponent } from '../components/option/main-menu-option/main-menu-option.component';
import { ConfirmationRoundedComponent } from '../components/button/confirmation-rounded/confirmation-rounded.component';
import { IconTemplateComponent } from '../components/asset/icon-template/icon-template.component';
import { ChatroomInfoComponent } from '../components/button/chatroom-info/chatroom-info.component';
import { MenuInputComponent } from '../components/input/menu-input/menu-input.component';
import { ChatInputComponent } from '../components/input/chat-input/chat-input.component';
import { ChatMessageComponent } from '../components/display/chat-message/chat-message.component';
import { SettingsBarComponent } from '../components/input/settings-bar/settings-bar.component';



@NgModule({
  declarations: [
    MainMenuOptionComponent,
    ConfirmationRoundedComponent,
    IconTemplateComponent,
    ChatroomInfoComponent,
    MenuInputComponent,
    ChatInputComponent,
    ChatMessageComponent,
    SettingsBarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MainMenuOptionComponent,
    ConfirmationRoundedComponent,
    IconTemplateComponent,
    ChatroomInfoComponent,
    MenuInputComponent,
    ChatInputComponent,
    ChatMessageComponent,
    SettingsBarComponent,
  ]
})
export class GlobalModule { }
