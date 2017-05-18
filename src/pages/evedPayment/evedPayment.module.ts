import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { evedPaymentPage } from './evedPayment';

@NgModule({
  declarations: [
    evedPaymentPage,
  ],
  imports: [
    IonicPageModule.forChild(evedPaymentPage),
  ],
  exports: [
    evedPaymentPage
  ]
})
export class evedPaymentPageModule {}
