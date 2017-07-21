import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PoTabPage } from './po-tab';

@NgModule({
  declarations: [
    PoTabPage,
  ],
  imports: [
    IonicPageModule.forChild(PoTabPage),
  ],
  exports: [
    PoTabPage
  ]
})
export class PoTabPageModule {}
