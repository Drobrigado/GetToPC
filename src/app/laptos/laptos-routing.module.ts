import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaptosPage } from './laptos.page';

const routes: Routes = [
  {
    path: '',
    component: LaptosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaptosPageRoutingModule {}
