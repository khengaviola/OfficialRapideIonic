import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the UserproviderProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserproviderProvider {
url: string;

  constructor(public http: Http) {
    console.log('Hello UserproviderProvider Provider');
  }

   getUser(){
    return this.http.get('http://localhost/Sample/select.php').map(res => res.json());
  }
}
