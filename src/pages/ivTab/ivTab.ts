import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ivFormPage } from '../ivForm/ivForm';

/**
 * Generated class for the IvTabPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-ivTab',
  templateUrl: 'ivTab.html',
})
export class ivTabPage {

  data : any;
  info : any;
  select : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.data = {};
    this.info = "customer";
    this.select = {};
  }

  goIvBack(){
    this.navCtrl.push(ivFormPage);
  }

  modalClose(){
    this.navCtrl.pop();
  }

  


  plateChange(){
    this.data.plate = this.select.plate; 
    var plate = document.getElementById("plate");
    plate.innerHTML = "";
  }

}
