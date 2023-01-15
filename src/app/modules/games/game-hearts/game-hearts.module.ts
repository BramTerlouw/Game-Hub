import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GlobalModule } from '../../global.module';
import { HeartsRoutingModule } from './game-hearts-routing.module';

import { CreateHeartsPage } from './pages/create-hearts/create-hearts.page';
import { JoinHeartsPage } from './pages/join-hearts/join-hearts.page';
import { PlayingFieldHeartsPage } from './pages/playing-field-hearts/playing-field-hearts.page';

import { CPlayingFieldHeartsComponent } from './containers/c-playing-field-hearts/c-playing-field-hearts.component';


@NgModule({
  declarations: [
    CreateHeartsPage,
    JoinHeartsPage,
    PlayingFieldHeartsPage,
    CPlayingFieldHeartsComponent,
  ],
  imports: [
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    GlobalModule,
    HeartsRoutingModule
  ]
})
export class GameHeartsModule { }
