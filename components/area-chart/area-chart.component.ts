import {
  Component, OnChanges, SimpleChanges,
} from "@angular/core";
import {Chart} from "../common/chart";
import {SvgService} from "../svg/svg.service";


@Component({
  selector: 'nc-area-chart, ncAreaChart',
  exportAs: 'ncAreaChart',
  templateUrl: './area-chart.component.html'
})
export class AreaChartComponent extends Chart implements OnChanges{

  constructor(protected svgService: SvgService) {
    super(svgService);
  }

  ngOnChanges(changes: SimpleChanges): void {
    for(let key in changes){
      this.svgService[key] = changes[key].currentValue;
    }
  }
}
