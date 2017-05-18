import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { evPrimaryDetailsPage } from './evPrimaryDetails';

@NgModule({
  declarations: [
    evPrimaryDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(evPrimaryDetailsPage),
  ],
  exports: [
    evPrimaryDetailsPage
  ]
})
export class evPrimaryDetailsPageModule {}
