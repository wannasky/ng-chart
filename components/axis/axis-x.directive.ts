import {Directive, Inject, Input, SkipSelf} from "@angular/core";
import {SvgService} from "../svg/svg.service";
import * as d3 from 'd3';
import {StateAccessor} from "../common/state-register";
import {CHART_ACCESSOR} from "../common/token";


@Directive({
  selector: 'nc-axis-x',
  exportAs: 'ncAxisX',
  providers: [
    {provide: CHART_ACCESSOR, useExisting: AxisXDirective, multi: true}
  ]
})
export class AxisXDirective implements StateAccessor{

  @Input() label: string;

  private onChange: (value: any) => void = () => null;

  domain() {
    return this.svgService.data.map(item => item.name);
  }

  range(): [number, number] {
    const padding = this.svgService.padding;
    return [0, this.svgService.width - padding.left - padding.right];
  }

  axisScale() {
    return d3.scaleBand()
      .domain(this.domain())
      .range(this.range())
      .paddingInner(1);
  }

  axis(group) {
    const padding = this.svgService.padding;
    const y = this.svgService.height - padding.bottom;
    group
      .attr('class', `nc-axis nc-axis-x`)
      .attr('transform', `translate(${padding.left}, ${y})`)
      .call(d3.axisBottom(this.axisScale()))
  }

  render() {
    const svg = d3.select(this.svgService.svg);
    svg.append('g').call((group) => {
      this.axis(group);
    });
  }

  constructor(private svgService: SvgService) {
  }

  registerStateOnChange(fn: any): void {

  }

  writeStateValue(value: string): void {
  }

}
