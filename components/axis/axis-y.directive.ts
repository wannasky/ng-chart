import {Directive, Input} from "@angular/core";
import {SvgService} from "../svg/svg.service";
import * as d3 from 'd3';
import {skipWhile} from "rxjs/operators";
import {State} from "../common/state";


@Directive({
  selector: 'nc-axis-y',
  exportAs: 'ncAxisY'
})
export class AxisYDirective {

  @Input() label: string;

  domain(): [number, number] {
    let extent = this.svgService.getChartExtent();
    let max = extent[1] === undefined ? 0 : Number.parseFloat(extent[1]);
    return [0, max];
  }

  range(): [number, number] {
    const padding = this.svgService.padding;
    return [this.svgService.height - padding.top - padding.bottom, 0];
  }

  axisScale() {
    return d3.scaleLinear()
      .domain(this.domain())
      .range(this.range())
  }

  axis(group) {
    const padding = this.svgService.padding;
    group
      .attr('class', `nc-axis nc-axis-y`)
      .attr('transform', `translate(${padding.left}, ${padding.top})`)
      .call(d3.axisLeft(this.axisScale()))
  }

  render() {
    const svg = d3.select(this.svgService.svg);
    svg.append('g').call((group) => {
      this.axis(group);
    });
  }

  constructor(private svgService: SvgService) {
    this.svgService.state
      .pipe(
        skipWhile(event => event !== State.READY)
      )
      .subscribe(() => {
        this.render();
      });
  }

}
