import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ivTabPage } from './ivTab';

@NgModule({
  declarations: [
    ivTabPage,
  ],
  imports: [
    IonicPageModule.forChild(ivTabPage),
  ],
  exports: [
    ivTabPage
  ]
})
export class IvTabPageModule {}
