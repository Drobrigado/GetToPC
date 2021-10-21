import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProcessorsPage } from './processors.page';

const routes: Routes = [
  {
    path: '',
    component: ProcessorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcessorsPageRoutingModule {}
