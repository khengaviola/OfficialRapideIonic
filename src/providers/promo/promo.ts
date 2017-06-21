import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PromoProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PromoProvider {

  constructor(public http: Http) {
    console.log('Hello PromoProvider Provider');
  }

getPromo(){
    return this.http.get('http://localhost/Sample/selectpromo.php').map(res => res.json());
  }
}
