import {Component, Input} from "@angular/core";
import * as d3 from 'd3';

@Component({
  selector: 'nc-axis, ncAxis',
  templateUrl:'./axis.component.html',
})
export class AxisComponent {

  private data: any = [];

  private _type: string = 'x';

  @Input()
  set type(axis: string) {
    console.log(axis);
    this._type = axis;
  }

  get type(): string{
    return this._type;
  }

  @Input()
  set label(label: string) {

  }

  setData(value: any) {
    this.data = value || [];
    this.renderAxis();
  }

  renderAxis() {

  }
}
