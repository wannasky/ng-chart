import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {AreaComponent} from "./area.component";
import {SVGModule} from "../svg/svg.module";
import {SvgService} from "../svg/svg.service";
import {AreaChartDirective} from "./area-chart.directive";
import {CHART_ACCESSOR} from "../common/token";

@NgModule({
  declarations: [AreaComponent, AreaChartDirective],
  imports: [SVGModule],
  exports: [AreaComponent, AreaChartDirective],
  providers: [SvgService, {provide: CHART_ACCESSOR, useValue: 'module', multi: true}],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AreaModule {

}
