import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasingPage } from './casing.page';

const routes: Routes = [
  {
    path: '',
    component: CasingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasingPageRoutingModule {}
