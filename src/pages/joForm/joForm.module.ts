import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { joFormPage } from './joForm';

@NgModule({
  declarations: [
    joFormPage,
  ],
  imports: [
    IonicPageModule.forChild(joFormPage),
  ],
  exports: [
    joFormPage
  ]
})
export class joFormPageModule {}
