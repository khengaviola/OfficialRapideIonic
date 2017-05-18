import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { joPaymentPage } from './joPayment';

@NgModule({
  declarations: [
    joPaymentPage,
  ],
  imports: [
    IonicPageModule.forChild(joPaymentPage),
  ],
  exports: [
    joPaymentPage
  ]
})
export class joPaymentPageModule {}
