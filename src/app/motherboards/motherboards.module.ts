import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MotherboardsPageRoutingModule } from './motherboards-routing.module';

import { MotherboardsPage } from './motherboards.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MotherboardsPageRoutingModule
  ],
  declarations: [MotherboardsPage]
})
export class MotherboardsPageModule {}
