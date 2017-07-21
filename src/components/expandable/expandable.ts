import { Component, Input } from '@angular/core';

/**
 * Generated class for the ExpandableComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'expandable',
  templateUrl: 'expandable.html'
})
export class ExpandableComponent {

  text: string;

  @Input('expanded') expanded;
  // @Input('expanded2') expanded2;
  // @Input('expanded3') expanded3;
  @Input('expandHeight') expandedHeight;
  // @Input('expandHeight2') expandedHeight2;
  // @Input('expandHeight3') expandedHeight3;


  constructor() {
    console.log('Hello ExpandableComponent Component');
  }

  ngAfterViewInit(){
  	console.log(this.expanded);
  	console.log(this.expandedHeight);
  	// console.log(this.expanded2);
  	// console.log(this.expanded3);
  }

}
