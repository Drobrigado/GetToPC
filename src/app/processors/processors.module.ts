import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProcessorsPageRoutingModule } from './processors-routing.module';

import { ProcessorsPage } from './processors.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProcessorsPageRoutingModule
  ],
  declarations: [ProcessorsPage]
})
export class ProcessorsPageModule {}
