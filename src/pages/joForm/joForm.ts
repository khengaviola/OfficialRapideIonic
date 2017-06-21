import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { joTabPage } from '../joTab/joTab';
import { JoborderProvider } from '../../providers/joborder/joborder';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

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
data: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, private joborderProvider: JoborderProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad joFormPage');
  }

  gojoTab(){
    this.navCtrl.push(joTabPage);
  }

  ngOnInit() {
    this.getJoborder();
  }


getJoborder()
  {
    this.joborderProvider.getJoborder().subscribe(res=>{
      this.data = res


       console.log(this.data.userId);
    });

   
  }

}
