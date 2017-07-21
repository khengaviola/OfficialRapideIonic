import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PoFormPage } from './po-form';

@NgModule({
  declarations: [
    PoFormPage,
  ],
  imports: [
    IonicPageModule.forChild(PoFormPage),
  ],
  exports: [
    PoFormPage
  ]
})
export class PoFormPageModule {}
