
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TutorialPageModule } from './tutorial/tutorial.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'find-page/:address', loadChildren: './find-page/find-page.module#FindPagePageModule' },
  { path: 'tutorial', loadChildren: './tutorial/tutorial.module#TutorialPageModule'},
  { path: 'blacklist', loadChildren: './blacklist/blacklist.module#blacklistPageModule'},
  { path: 'whitelist', loadChildren: './whitelist/whitelist.module#whitelistPageModule'},
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
