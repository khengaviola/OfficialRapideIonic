import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { evTabPage } from '../evTab/evTab';
import { UserproviderProvider } from '../../providers/userprovider/userprovider';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';
import { UpdateEstimatePage } from '../update-estimate/update-estimate';

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
data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private userProvider: UserproviderProvider, private http: Http, public modalCtrl: ModalController) {
  }

   goEvTab(){
    this.navCtrl.push(evTabPage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad evFormPage');
  }

  ngOnInit() {
    this.getUsers();
  }


getUsers()
  {
    this.userProvider.getUser().subscribe(res=>{
      this.data = res


       console.log(this.data.userId);
    });

   
  }

  update(){
    let pass = {};
    let opts = {enableBackdropDismiss: false};
    let modal = this.modalCtrl.create(UpdateEstimatePage,pass,opts);
    modal.present();
  }

}
