import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PackageProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PackageProvider {

  constructor(public http: Http) {
    console.log('Hello PackageProvider Provider');
  }

  getPackage(){
    return this.http.get('http://localhost/Sample/selectpackage.php').map(res => res.json());
  }

}
