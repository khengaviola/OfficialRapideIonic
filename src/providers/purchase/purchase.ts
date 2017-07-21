import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PurchaseProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PurchaseProvider {

  constructor(public http: Http) {
    console.log('Hello PurchaseProvider Provider');
  }


getPurchase(){
    return this.http.get('http://localhost/Sample/selectpurchase.php').map(res => res.json());
  }
}
