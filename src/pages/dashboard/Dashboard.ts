import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserproviderProvider } from '../../providers/userprovider/userprovider';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';
import { DashboardProvider } from '../../providers/dashboard/dashboard';

@Component({
  selector: 'page-Dashboard',
  templateUrl: 'Dashboard.html'
})
export class DashboardPage {
data:any;
data2:any;
prod:any;
  constructor(public navCtrl: NavController, private http: Http, private dashboardProvider: DashboardProvider) {
  this.data = {};
  }

ionViewDidLoad() {
    console.log('ionViewDidLoad evDashboardPage');
  }

ngOnInit() 
  {
    this.getDashboardinfo();
  }


getDashboardinfo()
  {
    this.dashboardProvider.getDashboard().subscribe(res=>{
      this.data2 = res

      console.log(this.data2);
    });
  }


}
