import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalModule } from '../global.module';

import { HomeRoutingModule } from './home-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './pages/home/home.page';
import { HomeSettingsPage } from './pages/home-settings/home-settings.page';


@NgModule({
  declarations: [
    HomePage,
    HomeSettingsPage,
  ],
  imports: [
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    GlobalModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
