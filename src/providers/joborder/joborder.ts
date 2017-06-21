import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the JoborderProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class JoborderProvider {

  constructor(public http: Http) {
    console.log('Hello JoborderProvider Provider');
  }

getJoborder(){
    return this.http.get('http://localhost/Sample/selectjoborder.php').map(res => res.json());
  }

}
