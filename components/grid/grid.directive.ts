import {Directive, Host, Input, OnInit} from "@angular/core";
import {Container} from "../common/container";
import {filter, map} from "rxjs/operators";
import {GroupReady} from "../common/events";
import {AxisYDirective} from "../axis/axis-y.directive";
import {AxisXDirective} from "../axis/axis-x.directive";
import {combineLatest} from "rxjs";
import {Selection} from "d3-selection";

@Directive({
  selector: 'nc-grid'
})
export class GridDirective implements OnInit {

  private group: Selection<SVGGElement, any, Element, any>;

  private horizontalGroup: Selection<SVGGElement, any, Element, any>;

  private verticalGroup: Selection<SVGGElement, any, Element, any>;

  private axisX: AxisXDirective;

  private axisY: AxisYDirective;

  @Input() direction: 'horizontal' | 'vertical' | 'all' = 'all';

  @Input() stroke: string = '#ccc';

  @Input() strokeWidth: number = 0.5;

  @Input() strokeDashArray: string = '5 5';

  drawHorizontalLine() {
    this.horizontalGroup = this.group.append('g')
      .attr('transform', `translate(${this.container.padding.left}, ${this.container.padding.top})`);
    this.horizontalGroup.selectAll('line')
      .data(this.axisY.getRealTickValues())
      .enter().append('line')
      .attr('x1', d => 0)
      .attr('y1', d => this.axisY.scale(d as number) + 1)
      .attr('x2', d => this.container.width - this.container.padding.left - this.container.padding.right)
      .attr('y2', d => this.axisY.scale(d as number) + 1)
      .attr('stroke', this.stroke)
      .attr('stroke-width', this.strokeWidth)
      .attr('stroke-dasharray', this.strokeDashArray)
      .attr('fill', 'none');
  }

  drawVerticalLine() {
    this.verticalGroup = this.group.append('g')
      .attr('transform', `translate(${this.container.padding.left}, ${this.container.padding.top})`);
    this.verticalGroup.selectAll('line')
      .data(this.axisX.getRealTickValues())
      .enter().append('line')
      .attr('x1', d => this.axisX.scale(d as any) + 1)
      .attr('y1', d => 0)
      .attr('x2', d => this.axisX.scale(d as any) + 1)
      .attr('y2', d => this.container.height - this.container.padding.top - this.container.padding.bottom)
      .attr('stroke', this.stroke)
      .attr('stroke-width', this.strokeWidth)
      .attr('stroke-dasharray', this.strokeDashArray)
      .attr('fill', 'none');
  }

  render() {
    if (this.horizontalGroup) {
      this.horizontalGroup.remove();
    }
    if (this.verticalGroup) {
      this.verticalGroup.remove();
    }
    if (this.direction === 'all') {
      this.drawHorizontalLine();
      this.drawVerticalLine();
    }
    if (this.direction === 'horizontal') {
      this.drawHorizontalLine();
    }
    if (this.direction === 'vertical') {
      this.drawVerticalLine();
    }
  }

  constructor(@Host() private container: Container) {
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
  }
}
