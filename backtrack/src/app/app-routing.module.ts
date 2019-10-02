import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'find', loadChildren: './pages/find/find.module#FindPageModule' },
  { path: 'scan', loadChildren: './pages/scan/scan.module#ScanPageModule' },
  { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' },
  { path: 'resources', loadChildren: './pages/resources/resources.module#ResourcesPageModule' },
  { path: 'panic', loadChildren: './pages/panic/panic.module#PanicPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
