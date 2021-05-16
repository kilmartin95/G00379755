import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThrillerPageRoutingModule } from './thriller-routing.module';

import { ThrillerPage } from './thriller.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThrillerPageRoutingModule
  ],
  declarations: [ThrillerPage]
})
export class ThrillerPageModule {}
