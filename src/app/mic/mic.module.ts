import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MicPageRoutingModule } from './mic-routing.module';

import { MicPage } from './mic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MicPageRoutingModule
  ],
  declarations: [MicPage]
})
export class MicPageModule {}
