import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from './pages/login/login.page';
import { RegistrationPage } from './pages/registration/registration.page';

const routes: Routes = [
    { 
        path: '', 
        component: LoginPage
    },
    { 
        path: 'registration', 
        component: RegistrationPage 
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
