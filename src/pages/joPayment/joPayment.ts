import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { joFormPage } from '../joForm/joForm';


/**
 * Generated class for the JoPaymentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-joPayment',
  templateUrl: 'joPayment.html',
})
export class joPaymentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad joPaymentPage');
  }

  gojoFormBack(){
  	this.navCtrl.push(joFormPage);
  }



}
