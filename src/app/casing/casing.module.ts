import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasingPageRoutingModule } from './casing-routing.module';

import { CasingPage } from './casing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasingPageRoutingModule
  ],
  declarations: [CasingPage]
})
export class CasingPageModule {}
