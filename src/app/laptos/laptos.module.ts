import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaptosPageRoutingModule } from './laptos-routing.module';

import { LaptosPage } from './laptos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaptosPageRoutingModule
  ],
  declarations: [LaptosPage]
})
export class LaptosPageModule {}
