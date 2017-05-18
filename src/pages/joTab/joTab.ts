import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { joPaymentPage } from '../joPayment/joPayment';

/**
 * Generated class for the JoTabPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-joTab',
  templateUrl: 'joTab.html',
})
export class joTabPage {

  data : any;
  info : any;
  select : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = {};
    this.info = "customer";
    this.select = {};
  }


  modalClose(){
    this.navCtrl.pop();
  }

  gojoPayment(){
    this.navCtrl.push(joPaymentPage);
  }

 

  plateChange(){
    this.data.plate = this.select.plate; 
    var plate = document.getElementById("plate");
    plate.innerHTML = "";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad joTabPage');
  }

}
