import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ivTabPage } from '../ivTab/ivTab';

@Component({
  selector: 'page-ivForm',
  templateUrl: 'ivForm.html'
})
export class ivFormPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  goIvTab(){
    this.navCtrl.push(ivTabPage);
  }

  

  itemTapped(event, item) {
    this.navCtrl.push(ivFormPage, {
      item: item
    });
  }
}
