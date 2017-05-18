import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { evedJobOrderPage } from './evedJobOrder';

@NgModule({
  declarations: [
    evedJobOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(evedJobOrderPage),
  ],
  exports: [
    evedJobOrderPage
  ]
})
export class evedJobOrderPageModule {}
