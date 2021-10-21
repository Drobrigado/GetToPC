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
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'pcset',
    loadChildren: () => import('./pcset/pcset.module').then( m => m.PcsetPageModule)
  },
  {
    path: 'laptos',
    loadChildren: () => import('./laptos/laptos.module').then( m => m.LaptosPageModule)
  },
  {
    path: 'processors',
    loadChildren: () => import('./processors/processors.module').then( m => m.ProcessorsPageModule)
  },
  {
    path: 'motherboards',
    loadChildren: () => import('./motherboards/motherboards.module').then( m => m.MotherboardsPageModule)
  },
  {
    path: 'memory',
    loadChildren: () => import('./memory/memory.module').then( m => m.MemoryPageModule)
  },
  {
    path: 'storage',
    loadChildren: () => import('./storage/storage.module').then( m => m.StoragePageModule)
  },
  {
    path: 'graphics',
    loadChildren: () => import('./graphics/graphics.module').then( m => m.GraphicsPageModule)
  },
  {
    path: 'casing',
    loadChildren: () => import('./casing/casing.module').then( m => m.CasingPageModule)
  },
  {
    path: 'power',
    loadChildren: () => import('./power/power.module').then( m => m.PowerPageModule)
  },
  {
    path: 'nic',
    loadChildren: () => import('./nic/nic.module').then( m => m.NicPageModule)
  },
  {
    path: 'fans',
    loadChildren: () => import('./fans/fans.module').then( m => m.FansPageModule)
  },
  {
    path: 'opdrive',
    loadChildren: () => import('./opdrive/opdrive.module').then( m => m.OpdrivePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
