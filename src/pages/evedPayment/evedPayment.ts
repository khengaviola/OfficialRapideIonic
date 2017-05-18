import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { evedJobOrderPage } from '../evedJobOrder/evedJobOrder';

/**
 * Generated class for the EvedPaymentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-evedPayment',
  templateUrl: 'evedPayment.html',
})
export class evedPaymentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  goEvedJobOrderBack(){
  	this.navCtrl.push(evedJobOrderPage);
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad evedPaymentPage');
  }

}
