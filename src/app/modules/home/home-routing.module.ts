import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { HomeSettingsPage } from './pages/home-settings/home-settings.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'settings',
    component: HomeSettingsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
