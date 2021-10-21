import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PcsetPage } from './pcset.page';

const routes: Routes = [
  {
    path: '',
    component: PcsetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PcsetPageRoutingModule {}
