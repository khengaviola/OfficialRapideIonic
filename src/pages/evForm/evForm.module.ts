import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { evFormPage } from './evForm';

@NgModule({
  declarations: [
    evFormPage,
  ],
  imports: [
    IonicPageModule.forChild(evFormPage),
  ],
  exports: [
    evFormPage
  ]
})
export class EvFormPageModule {}
