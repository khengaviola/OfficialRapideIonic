import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DiscountProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DiscountProvider {

  constructor(public http: Http) {
    console.log('Hello DiscountProvider Provider');
  }

getDiscount(){
    return this.http.get('http://localhost/Sample/selectdiscount.php').map(res => res.json());
  }
}
