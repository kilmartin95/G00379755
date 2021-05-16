import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'horror',
    loadChildren: () => import('./horror/horror.module').then( m => m.HorrorPageModule)
  },
  {
    path: 'thriller',
    loadChildren: () => import('./thriller/thriller.module').then( m => m.ThrillerPageModule)
  },
  {
    path: 'action',
    loadChildren: () => import('./action/action.module').then( m => m.ActionPageModule)
  },
  {
    path: 'comedy',
    loadChildren: () => import('./comedy/comedy.module').then( m => m.ComedyPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
