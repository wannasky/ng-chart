import {Component} from "@angular/core";
import {Container} from "../common/container";



@Component({
  selector: 'nc-area, ncArea',
  exportAs: 'ncArea',
  template: '<svg #root></svg>',
  providers: [
    {provide: Container, useExisting: AreaComponent}
  ]
})
export class AreaComponent extends Container{

  constructor() {
    super();
  }

}
