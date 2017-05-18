import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { joTabPage } from '../joTab/joTab';

/**
 * Generated class for the JoFormPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-joForm',
  templateUrl: 'joForm.html',
})
export class joFormPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad joFormPage');
  }

  gojoTab(){
    this.navCtrl.push(joTabPage);
  }

}
