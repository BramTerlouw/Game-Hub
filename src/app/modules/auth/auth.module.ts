import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalModule } from '../global.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { LoginPage } from './pages/login/login.page';
import { RegistrationPage } from './pages/registration/registration.page';

import { CLoginComponent } from './containers/c-login/c-login.component';
import { CRegistrationComponent } from './containers/c-registration/c-registration.component';
import { AuthRoutingModule } from './auth-routing.module';


@NgModule({
  declarations: [
    LoginPage,
    RegistrationPage,
    CLoginComponent,
    CRegistrationComponent
  ],
  imports: [
    CommonModule,
    GlobalModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
