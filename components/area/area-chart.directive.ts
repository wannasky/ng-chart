import {Directive, Input} from "@angular/core";
import {SvgService} from "../svg/svg.service";
import {State} from "../common/state";
import * as d3 from 'd3';

@Directive({
  selector: 'nc-area-chart',
  exportAs: 'ncAreaChart'
})
export class AreaChartDirective {

  private _key: string;

  private _shape: string;

  private chart: any;

  @Input()
  set key(value: string) {
    this._key = value;
    this.svgService.addChartKey(value);
  }

  @Input()
  set shape(value: string) {
    this._shape = value;
  }

  get key(): string {
    return this._key;
  }

  render() {

  }

  constructor(private svgService: SvgService) {

  }
}
