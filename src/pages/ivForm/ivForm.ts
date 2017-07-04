import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ivTabPage } from '../ivTab/ivTab';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';
import { InspectProvider } from '../../providers/inspect/inspect';

@Component({
  selector: 'page-ivForm',
  templateUrl: 'ivForm.html'
})
export class ivFormPage {
  selectedItem: any;
  data:any;
  data2:any;
  results : any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, private inspectProvider: InspectProvider) {
     this.data2 = {};
     this.results = {};
  }

  goIvTab(){
    this.navCtrl.push(ivTabPage);
  }

ngOnInit() 
  {
    this.getInspect();
  }
  
  getInspect(){
     this.inspectProvider.getInspect().subscribe(res=>{
      this.data = res
     


    });
  }

  itemTapped(event, item) {
    this.navCtrl.push(ivFormPage, {
      item: item
    });
  }
}
