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
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'buy',
    loadChildren: () => import('./buy/buy.module').then( m => m.BuyPageModule)
  },
  {
    path: 'monitor',
    loadChildren: () => import('./monitor/monitor.module').then( m => m.MonitorPageModule)
  },
  {
    path: 'mouse',
    loadChildren: () => import('./mouse/mouse.module').then( m => m.MousePageModule)
  },
  {
    path: 'keyboard',
    loadChildren: () => import('./keyboard/keyboard.module').then( m => m.KeyboardPageModule)
  },
  {
    path: 'headsets',
    loadChildren: () => import('./headsets/headsets.module').then( m => m.HeadsetsPageModule)
  },
  {
    path: 'printers',
    loadChildren: () => import('./printers/printers.module').then( m => m.PrintersPageModule)
  },
  {
    path: 'speakers',
    loadChildren: () => import('./speakers/speakers.module').then( m => m.SpeakersPageModule)
  },
  {
    path: 'mic',
    loadChildren: () => import('./mic/mic.module').then( m => m.MicPageModule)
  },
  {
    path: 'cam',
    loadChildren: () => import('./cam/cam.module').then( m => m.CamPageModule)
  },
  {
    path: 'accessory',
    loadChildren: () => import('./accessory/accessory.module').then( m => m.AccessoryPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
