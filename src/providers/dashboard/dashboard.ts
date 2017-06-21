import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DashboardProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DashboardProvider {

  constructor(public http: Http) {
    console.log('Hello DashboardProvider Provider');
  }


getDashboard(){
    return this.http.get('http://localhost/Sample/selectdashboard.php').map(res => res.json());
  }
}
