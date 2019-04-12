import {Directive, Host, OnDestroy, OnInit} from "@angular/core";
import {Container} from "../common/container";
import {ContainerElement, Selection} from "d3-selection";
import {filter, map} from "rxjs/operators";
import {GroupReady} from "../common/events";
import {AxisYDirective} from "../axis/axis-y.directive";
import {AxisXDirective} from "../axis/axis-x.directive";
import {combineLatest} from "rxjs";
import * as d3 from 'd3';

@Directive({
  selector: 'nc-tooltip'
})
export class TooltipDirective implements OnInit, OnDestroy{

  private axisX: AxisXDirective;

  private axisY: AxisYDirective;

  group: Selection<SVGGElement, any, Element, any>;

  render() {
    if(this.group){
      this.group.remove();
    }
    this.group = this.container.root.append('g')
      .attr('transform', `translate(${this.container.padding.left}, ${this.container.padding.top})`);
    let coordinateRelativeToSvg = d3.mouse(this.container.root.node() as SVGSVGElement);
    let coordinate = [coordinateRelativeToSvg[0] - this.container.padding.left, coordinateRelativeToSvg[1] - this.container.padding.top];
    if(coordinate[0] < 0 || coordinate[1] < 0) return;
    console.log(coordinate, d3.event);
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
    });
  }

  ngOnInit(): void {
    this.container.root.on('mousemove', () => {
      this.render();
    });
  }

  ngOnDestroy(): void {
    this.container.root.on('mousemove', null);
  }


}
