import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UpdateEstimatePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-update-estimate',
  templateUrl: 'update-estimate.html',
})
export class UpdateEstimatePage {
data:any;
  info : any;
  select : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.data = {};
    this.info = "customer";
    this.select = {};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateEstimatePage');
  }

Modal(){
	this.navCtrl.pop();
}

}
