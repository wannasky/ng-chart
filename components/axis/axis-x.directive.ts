import {Directive, Host, Input, OnInit} from "@angular/core";
import {Container} from "../common/container";
import * as d3 from 'd3';
import {Axis, axisBottom, ScaleBand, ScaleTime} from "d3";
import {filter} from "rxjs/operators";
import {ViewReady} from "../common/events";
import {AxisGroup} from "../common/axis-group";

@Directive({
  selector: 'nc-axis-x',
  exportAs: 'ncAxisX'
})
export class AxisXDirective extends AxisGroup implements OnInit {

  public scale: ScaleBand<any> | ScaleTime<any, any>;

  public axis: Axis<any>;

  private _count: number;

  @Input() key: string;

  @Input() type: string;

  @Input()
  set count(value: number) {
    this._count = value;
  }

  get count(): number {
    return Number.parseInt(this._count + '');
  }

  @Input() text: (value: any) => string;

  setScale() {
    let type = this.type.slice(0,1).toUpperCase() + this.type.slice(1).toLowerCase();
    this.scale = d3[`scale${type}`]();
  }

  setDomain() {
    if(this.scale.domain){
      let data = this.container.data;
      if(this.key) {
        data = data.map(item => item[this.key]);
      }

      if(this.type === 'time'){
        data = [data[0], data[data.length - 1]];
        data = data.map(item => {
          return this.transtimeValue(item);
        });
      }
      this.scale.domain(data);
    }
  }

  transtimeValue(item): Date {
    return item instanceof Date ? item : new Date(item);
  }

  setRange() {
    if(this.scale.range) {
      this.scale.range([0, this.container.width - this.container.padding.left - this.container.padding.right]);
    }
  }

  setScaleOptions() {
    if(this.type === 'band') {
      const scale = this.scale as ScaleBand<any>;
      scale.paddingInner(1);
    }
  }

  setAxis() {
    this.axis = axisBottom(this.scale);
  }

  setAxisOptions() {
    if(this.type !== 'band') {

      if(this.count) {
        this.axis.ticks(this.count);
      }
    }

    if(this.text) {
      this.axis.tickFormat(this.text)
    }
  }

  getRealTickValues() {
    let scale = this.scale as any;
    let tickArguments = this.count ? [this.count] : [];
    return scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain();
  }

  render(): void {
    this.group.attr('transform', `translate(${this.container.padding.left} , ${this.container.height - this.container.padding.bottom})`);
    this.setScale();
    this.setDomain();
    this.setRange();
    this.setScaleOptions();
    this.setAxis();
    this.setAxisOptions();
    this.group.call(this.axis);
    super.ready();
  }

  getPosition(data: any): number {
    let method = `trans${this.type.toLowerCase()}Value`;
    let item = this.key ? data[this.key] : data;
    let value = this[method] ? this[method](item) : item;
    if(this.key){
      return this.scale(value);
    }else{
      return this.scale(value);
    }
  }

  constructor(@Host() private container: Container) {
    super(container);
    this.container.events
      .pipe(filter(event => event instanceof ViewReady))
      .subscribe(() => this.render());
  }

  ngOnInit(): void {
    this.group = this.container.root.append('g');
  }

}
