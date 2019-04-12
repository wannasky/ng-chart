import {Directive, Host, Input, OnInit} from "@angular/core";
import {Container} from "../common/container";
import {scaleLinear, ScaleLinear} from "d3-scale";
import {Axis, axisLeft} from "d3-axis";
import {extent, merge} from "d3-array";
import {GroupChange} from "../common/events";
import {filter} from "rxjs/operators";
import {AxisGroup} from "../common/axis-group";
import {ChartGroup} from "../common/chart-group";
import {getMaxTickValue} from "../common/util";


@Directive({
  selector: 'nc-axis-y',
  exportAs: 'ncAxisY'
})
export class AxisYDirective extends AxisGroup implements OnInit {

  public scale: ScaleLinear<any, any>;

  public axis: Axis<any>;

  private _count: number;

  private keys: string[] = [];

  private charts = new Map<ChartGroup, any>();

  @Input()
  set count(value: number) {
    this._count = value;
  }

  get count(): number {
    return Number.parseInt(this._count + '');
  }

  @Input() text: (value: any) => string;

  getExtent(): [number, number] {
    let extentArray = [];
    this.keys.forEach(key => {
      extentArray.push(extent(this.container.data, item => {
        return Number.parseFloat(item[key]);
      }))
    });
    let dataExtent = extent(merge(extentArray)) as [number, number];
    dataExtent = dataExtent[0] === undefined ? [0, 0] : [0, dataExtent[1]];
    return dataExtent;
  }

  setScale() {
    this.scale = scaleLinear().nice();
  }

  setDomain() {
    let extent = this.getExtent();
    this.scale.domain([extent[0], getMaxTickValue(extent[1], this.count)]);
  }

  setRange() {
    this.scale.range([this.container.height - this.container.padding.top - this.container.padding.bottom, 0]);
  }

  setAxis() {
    this.axis = axisLeft(this.scale);
  }

  setAxisOptions() {
    if(this.count){
      this.axis.ticks(this.count);
    }
    if(this.text){
      this.axis.tickFormat(this.text)
    }
  }

  getRealTickValues() {
    let scale = this.scale as any;
    let tickArguments = this.count ? [this.count] : [];
    return scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain();
  }

  render() {
    this.group.attr('transform', `translate(${this.container.padding.left}, ${this.container.padding.top})`);
    this.setScale();
    this.setDomain();
    this.setRange();
    this.setAxis();
    this.setAxisOptions();
    this.group.call(this.axis);
    super.ready();
  }

  getPosition(data: any, key: string): number {
    return this.scale(data[key]);
  }

  constructor(@Host() private container: Container) {
    super(container);
    this.container.events
      .pipe(filter(event => event instanceof GroupChange && event.group instanceof ChartGroup))
      .subscribe((groupChange: GroupChange) => {
        this.charts.set(groupChange.group, groupChange.props);
        this.keys = [];
        this.charts.forEach(item => {
          this.keys.push(item.key.currentValue);
        });
        this.render();
      });
  }

  ngOnInit(): void {
    this.group = this.container.root.append('g');
  }

}
