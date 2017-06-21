import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TechnicianProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TechnicianProvider {

  constructor(public http: Http) {
    console.log('Hello TechnicianProvider Provider');
  }

getTechnician(){
    return this.http.get('http://localhost/Sample/selecttechnician.php').map(res => res.json());
  }
}
