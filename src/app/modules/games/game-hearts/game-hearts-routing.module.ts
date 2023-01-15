import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateHeartsPage } from './pages/create-hearts/create-hearts.page';
import { JoinHeartsPage } from './pages/join-hearts/join-hearts.page';
import { PlayingFieldHeartsPage } from './pages/playing-field-hearts/playing-field-hearts.page';

const routes: Routes = [
  {
    path: '',
     component: PlayingFieldHeartsPage
  },
  {
    path: 'create',
    component: CreateHeartsPage,
  },
  {
    path: 'join',
    component: JoinHeartsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeartsRoutingModule {}
