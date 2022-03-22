import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValorgastoPageRoutingModule } from './valorgasto-routing.module';

import { ValorgastoPage } from './valorgasto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValorgastoPageRoutingModule
  ],
  declarations: [ValorgastoPage]
})
export class ValorgastoPageModule {}
