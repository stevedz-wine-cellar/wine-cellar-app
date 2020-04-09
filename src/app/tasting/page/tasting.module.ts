import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TastingPageRoutingModule } from './tasting-routing.module';

import { TastingPage } from './tasting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TastingPageRoutingModule
  ],
  declarations: [TastingPage]
})
export class TastingPageModule {}
