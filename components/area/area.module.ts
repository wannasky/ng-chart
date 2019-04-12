import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {AreaComponent} from "./area.component";
import {AreaChartDirective} from "./area-chart.directive";
import {ChartModule} from "../chart/chart.module";

@NgModule({
  declarations: [AreaComponent, AreaChartDirective],
  imports: [ChartModule],
  exports: [AreaComponent, AreaChartDirective],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AreaModule {

}
