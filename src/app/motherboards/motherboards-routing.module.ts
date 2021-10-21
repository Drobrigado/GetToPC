import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MotherboardsPage } from './motherboards.page';

const routes: Routes = [
  {
    path: '',
    component: MotherboardsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MotherboardsPageRoutingModule {}
