import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasting',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    redirectTo: 'tasting',
    pathMatch: 'full'
  },
  {
    path: 'tasting',
    loadChildren: () => import('./tasting/page/tasting.module').then(m => m.TastingPageModule)
  },
  {
    path: 'tasting-note',
    loadChildren: () => import('./tasting-note/page/tasting-note.module').then(m => m.TastingNotePageModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('./favorites/page/favorites.module').then(m => m.FavoritesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
