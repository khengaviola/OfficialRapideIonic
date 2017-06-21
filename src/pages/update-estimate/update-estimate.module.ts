import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpdateEstimatePage } from './update-estimate';

@NgModule({
  declarations: [
    UpdateEstimatePage,
  ],
  imports: [
    IonicPageModule.forChild(UpdateEstimatePage),
  ],
  exports: [
    UpdateEstimatePage
  ]
})
export class UpdateEstimatePageModule {}
