import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('../modules/auth/auth.module').then(m => m.AuthModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../modules/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'chat',
        loadChildren: () => import('../modules/chat/chat.module').then(m => m.ChatModule)
      },
      {
        path: 'hearts',
        loadChildren: () => import('../modules/games/game-hearts/game-hearts.module').then(m => m.GameHeartsModule)
      },
      {
        path: 'shithead',
        loadChildren: () => import('../modules/games/game-shithead/game-shithead.module').then(m => m.GameShitheadModule)
      },
      {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
