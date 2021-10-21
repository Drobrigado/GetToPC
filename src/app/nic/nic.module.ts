import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NicPageRoutingModule } from './nic-routing.module';

import { NicPage } from './nic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NicPageRoutingModule
  ],
  declarations: [NicPage]
})
export class NicPageModule {}
