import {Directive, Host, Input, OnInit} from "@angular/core";
import {Container} from "../common/container";
import {ChartGroup} from "../common/chart-group";
import {GroupReady} from "../common/events";
import {AxisYDirective} from "../axis/axis-y.directive";
import {filter, map} from "rxjs/operators";
import {area, Area, line, Line, Selection} from "d3";
import {AxisXDirective} from "../axis/axis-x.directive";
import {combineLatest} from "rxjs";
import {LinearGradientContainer} from "../defs/linear-gradient.container";
import {Curves} from "../common/curve-factory";

@Directive({
  selector: 'nc-area-chart',
  exportAs: 'ncAreaChart'
})
export class AreaChartDirective extends ChartGroup implements OnInit {

  private _key: string;

  private _shape: string = 'linear';

  private axisX: AxisXDirective;

  private axisY: AxisYDirective;

  private path: Selection<SVGGElement, any, Element, any>;

  private area: Area<any>;

  private strokeLine: Line<any>;

  private strokePath: Selection<SVGGElement, any, Element, any>;

  @Input()
  set key(value: string) {
    this._key = value;
  }

  get key(): string {
    return this._key;
  }

  @Input()
  set shape(value: string) {
    this._shape = value;
  }

  get shape(): string {
    return this._shape;
  }

  @Input() fill: any;

  @Input() stroke: string = 'none';

  setArea() {
    this.area = area()
      .x(d => {
        return this.axisX.getPosition(d);
      })
      .y0(this.axisY.scale(0))
      .y1(d => this.axisY.getPosition(d, this.key));
    this.setCurve(this.area, this.shape);
  }

  setLine() {
    this.strokeLine = line()
      .x(d => this.axisX.getPosition(d))
      .y(d => this.axisY.getPosition(d, this.key));
    this.setCurve(this.strokeLine, this.shape);
  }

  setCurve(shape: any, type: string) {
    const curveType = type.toUpperCase();
    if(Curves[curveType]){
      shape.curve(Curves[curveType]);
    }
  }

  render(): void {
    this.group.attr('transform', `translate(${this.container.padding.left}, ${this.container.padding.top})`)
    this.setArea();
    const fill = this.fill instanceof LinearGradientContainer ? `url(#${this.fill.id})` : this.fill;

    this.path.datum(this.container.data)
      .attr('fill', fill)
      .attr('d', this.area);

    if(this.strokePath){
      this.strokePath.remove();
    }
    if (this.stroke !== 'none') {
      this.setLine();
      this.strokePath = this.group.append('path')
        .datum(this.container.data)
        .attr('d', this.strokeLine)
        .attr('stroke', this.stroke)
        .attr('fill', 'none');
    }
  }

  constructor(@Host() private container: Container) {
    super(container);
    const axisYObs = this.container.events.pipe(
      filter(event => event instanceof GroupReady && event.group instanceof AxisYDirective),
      map((event: GroupReady) => event.group)
    );
    const axisXObs = this.container.events.pipe(
      filter(event => event instanceof GroupReady && event.group instanceof AxisXDirective),
      map((event: GroupReady) => event.group)
    );

    combineLatest(axisXObs, axisYObs).subscribe(axis => {
      this.axisX = axis[0];
      this.axisY = axis[1];
      this.render();
    });
  }

  ngOnInit(): void {
    this.group = this.container.root.append('g');
    this.path = this.group.append('path');
  }


}
