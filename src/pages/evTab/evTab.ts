import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { evFormPage } from '../evForm/evForm';
import { evedJobOrderPage } from '../evedJobOrder/evedJobOrder';

@IonicPage()
@Component({
  selector: 'page-evTab',
  templateUrl: 'evTab.html',
})
export class evTabPage {

  data : any;
  info : any;
  select : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.data = {};
    this.info = "customer";
    this.select = {};
  }

  goEvBack(){
    this.navCtrl.push(evFormPage);
  }

  modalClose(){
    this.navCtrl.pop();
  }

  goEvedJobOrder(){
    this.navCtrl.push(evedJobOrderPage);
  }

  


  plateChange(){
    this.data.plate = this.select.plate; 
    var plate = document.getElementById("plate");
    plate.innerHTML = "";
  }

}
