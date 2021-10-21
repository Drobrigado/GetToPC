import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MicPage } from './mic.page';

const routes: Routes = [
  {
    path: '',
    component: MicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MicPageRoutingModule {}
