import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the InspectProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class InspectProvider {

  constructor(public http: Http) {
    console.log('Hello InspectProvider Provider');
  }

getInspect(){
    return this.http.get('http://localhost/Sample/selectinspect.php').map(res => res.json());
  }
}
