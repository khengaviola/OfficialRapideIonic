import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PurchaseProvider } from '../../providers/purchase/purchase';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the PoFormPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-po-form',
  templateUrl: 'po-form.html',
})
export class PoFormPage {

	data: any;
	testss: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, private purchaseProvider: PurchaseProvider) {
  	this.data = {};
  	this.testss = {};

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PoFormPage');
  }

  ngOnInit() {
    this.getPurchase();
  }


getPurchase()
  {
    this.purchaseProvider.getPurchase().subscribe(res=>{
      this.data = res

      console.log(this.testss);
    });

   
  }

}
