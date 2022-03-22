import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValorgastoPage } from './valorgasto.page';

const routes: Routes = [
  {
    path: '',
    component: ValorgastoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValorgastoPageRoutingModule {}
