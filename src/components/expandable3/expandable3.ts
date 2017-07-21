import { Component, Input } from '@angular/core';

/**
 * Generated class for the Expandable3Component component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'expandable3',
  templateUrl: 'expandable3.html'
})
export class Expandable3Component {

  @Input('expanded3') expanded3;
  @Input('expandHeight3') expandedHeight3;

  text: string;

  constructor() {
    console.log('Hello Expandable3Component Component');
    this.text = 'Hello World';
  }

}
