import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the CustomerProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CustomerProvider {

  constructor(public http: Http) {
    console.log('Hello CustomerProvider Provider');
  }

getCustomer(){
    return this.http.get('http://192.168.43.100:8000/item/customer/'+name).map(res => res.json());
  }

getCustomerName(){
	return this.http.get('http://localhost/Sample/selectCustomer.php').map(res => res.json());
}

}
