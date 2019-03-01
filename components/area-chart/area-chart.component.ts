import {
  AfterContentInit,
  Component,
  ComponentRef,
  ContentChildren,
  Input, QueryList,
  ViewChild
} from "@angular/core";
import {SVGComponent} from "../svg/svg.component";
import {AxisComponent} from "../axis/axis.component";

@Component({
  selector: 'nc-area-chart, ncAreaChart',
  exportAs: 'ncAreaChart',
  templateUrl: './area-chart.component.html'
})
export class AreaChartComponent implements AfterContentInit{

  private _data: any;

  @ViewChild(SVGComponent) SVGComp: ComponentRef<any>;

  @ContentChildren(AxisComponent) AxisComp: QueryList<AxisComponent>;

  @Input() width: number;

  @Input() height: number;

  @Input()
  set data(value: any) {
    this._data = value;
    this.dispatch();
  }

  get data(): any {
    return this._data;
  }

  dispatch() {
    if(this.AxisComp){
      this.AxisComp.forEach(item => {
        item.setData(this.data);
      });
    }
  }

  ngAfterContentInit(): void {
    this.dispatch();
  }

}
