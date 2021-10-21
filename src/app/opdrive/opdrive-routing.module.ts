import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpdrivePage } from './opdrive.page';

const routes: Routes = [
  {
    path: '',
    component: OpdrivePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpdrivePageRoutingModule {}
