import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { evTabPage } from './evTab';

@NgModule({
  declarations: [
    evTabPage,
  ],
  imports: [
    IonicPageModule.forChild(evTabPage),
  ],
  exports: [
    evTabPage
  ]
})
export class evTabPageModule {}
