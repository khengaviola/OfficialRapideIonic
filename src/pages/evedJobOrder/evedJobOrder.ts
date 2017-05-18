import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { evTabPage } from '../evTab/evTab';
import { evedPaymentPage } from '../evedPayment/evedPayment';

@IonicPage()
@Component({
  selector: 'page-evedJobOrder',
  templateUrl: 'evedJobOrder.html',
})
export class evedJobOrderPage {

   data : any;
  info : any;
  select : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.data = {};
    this.info = "customer";
    this.select = {};
  }

  goEvBack(){
    this.navCtrl.push(evTabPage);
  }

  modalClose(){
    this.navCtrl.pop();
  }

  goEvedPayment(){
    this.navCtrl.push(evedPaymentPage);
  }

  


  plateChange(){
    this.data.plate = this.select.plate; 
    var plate = document.getElementById("plate");
    plate.innerHTML = "";
  }

}
