import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RdFormPage } from './rd-form';

@NgModule({
  declarations: [
    RdFormPage,
  ],
  imports: [
    IonicPageModule.forChild(RdFormPage),
  ],
  exports: [
    RdFormPage
  ]
})
export class RdFormPageModule {}
