import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NicPage } from './nic.page';

const routes: Routes = [
  {
    path: '',
    component: NicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NicPageRoutingModule {}
