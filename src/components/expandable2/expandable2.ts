import { Component, Input } from '@angular/core';

/**
 * Generated class for the Expandable2Component component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'expandable2',
  templateUrl: 'expandable2.html'
})
export class Expandable2Component {

  @Input('expanded2') expanded2;
  @Input('expandHeight2') expandedHeight2;

  text: string;

  constructor() {
    console.log('Hello Expandable2Component Component');
 
  }

}
