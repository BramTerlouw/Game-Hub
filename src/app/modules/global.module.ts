import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// ** Atom btns
import { BtnPanelComponent } from '../components/atom/button/btn-panel/btn-panel.component';
import { BtnApplyComponent } from '../components/atom/button/btn-apply/btn-apply.component';
import { BtnSettingComponent } from '../components/atom/button/btn-setting/btn-setting.component';
import { BtnGameSettingComponent } from '../components/atom/button/btn-game-setting/btn-game-setting.component';

// ** Atom displays
import { ChatMessageComponent } from '../components/atom/display/chat-message/chat-message.component';
import { ChatroomInfoComponent } from '../components/atom/display/chatroom-info/chatroom-info.component';
import { IconTemplateComponent } from '../components/atom/display/icon-template/icon-template.component';
import { TitleComponent } from '../components/atom/display/title/title.component';

// ** Atom inputs
import { InputChatComponent } from '../components/atom/input/input-chat/input-chat.component';
import { InputMenuComponent } from '../components/atom/input/input-menu/input-menu.component';
import { InputToggleComponent } from '../components/atom/input/input-toggle/input-toggle.component';

// ** Atom options
import { OptionMainMenuComponent } from '../components/atom/option/option-main-menu/option-main-menu.component';

// ** Molecules
import { SettingsBarComponent } from '../components/molecule/settings-bar/settings-bar.component';
import { SettingToggleComponent } from '../components/molecule/setting-toggle/setting-toggle.component';
import { OptionsMainMenuComponent } from '../components/molecule/options-main-menu/options-main-menu.component';
import { GameSettingsCollapsableComponent } from '../components/molecule/game-settings-collapsable/game-settings-collapsable.component';



@NgModule({
  declarations: [
    BtnPanelComponent,
    BtnApplyComponent,
    BtnSettingComponent,
    BtnGameSettingComponent,
    ChatMessageComponent,
    ChatroomInfoComponent,
    IconTemplateComponent,
    TitleComponent,
    InputChatComponent,
    InputMenuComponent,
    InputToggleComponent,
    OptionMainMenuComponent,
    SettingsBarComponent,
    SettingToggleComponent,
    OptionsMainMenuComponent,
    GameSettingsCollapsableComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    BtnPanelComponent,
    BtnApplyComponent,
    BtnSettingComponent,
    BtnGameSettingComponent,
    ChatMessageComponent,
    ChatroomInfoComponent,
    IconTemplateComponent,
    TitleComponent,
    InputChatComponent,
    InputMenuComponent,
    InputToggleComponent,
    OptionMainMenuComponent,
    SettingsBarComponent,
    SettingToggleComponent,
    OptionsMainMenuComponent,
    GameSettingsCollapsableComponent,
  ]
})
export class GlobalModule { }
