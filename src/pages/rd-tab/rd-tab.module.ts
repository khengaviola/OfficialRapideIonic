import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RdTabPage } from './rd-tab';

@NgModule({
  declarations: [
    RdTabPage,
  ],
  imports: [
    IonicPageModule.forChild(RdTabPage),
  ],
  exports: [
    RdTabPage
  ]
})
export class RdTabPageModule {}
