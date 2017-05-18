import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { evTabPage } from '../evTab/evTab';

/**
 * Generated class for the EvFormPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-evForm',
  templateUrl: 'evForm.html',
})
export class evFormPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

   goEvTab(){
    this.navCtrl.push(evTabPage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad evFormPage');
  }

}
