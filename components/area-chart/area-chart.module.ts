import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {AreaChartComponent} from "./area-chart.component";
import {SVGModule} from "../svg/svg.module";
import {SvgService} from "../svg/svg.service";

@NgModule({
  declarations: [AreaChartComponent],
  imports: [SVGModule],
  exports: [AreaChartComponent],
  providers: [SvgService],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AreaChartModule {

}
