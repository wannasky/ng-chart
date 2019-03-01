import { NgModule} from "@angular/core";
import {AreaChartComponent} from "./area-chart.component";
import {SVGModule} from "../svg/svg.module";

@NgModule({
  declarations: [AreaChartComponent],
  imports: [SVGModule],
  exports: [AreaChartComponent]
})
export class AreaChartModule {

}
