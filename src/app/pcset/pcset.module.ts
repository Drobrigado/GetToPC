import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PcsetPageRoutingModule } from './pcset-routing.module';

import { PcsetPage } from './pcset.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PcsetPageRoutingModule
  ],
  declarations: [PcsetPage]
})
export class PcsetPageModule {}
