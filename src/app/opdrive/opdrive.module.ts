import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpdrivePageRoutingModule } from './opdrive-routing.module';

import { OpdrivePage } from './opdrive.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpdrivePageRoutingModule
  ],
  declarations: [OpdrivePage]
})
export class OpdrivePageModule {}
