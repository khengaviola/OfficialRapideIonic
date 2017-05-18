import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { joTabPage } from './joTab';

@NgModule({
  declarations: [
    joTabPage,
  ],
  imports: [
    IonicPageModule.forChild(joTabPage),
  ],
  exports: [
    joTabPage
  ]
})
export class joTabPageModule {}
