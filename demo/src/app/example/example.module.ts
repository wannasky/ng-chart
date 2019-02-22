import {NgModule} from "@angular/core";
import {AreaChartComponent} from "./area-chart/areaChart.component";
import {BarChartComponent} from "./bar-chart/barChart.component";
import {LineChartComponent} from "./line-chart/lineChart.component";

@NgModule({
  declarations: [
    AreaChartComponent,
    BarChartComponent,
    LineChartComponent
  ],
  exports: [
    AreaChartComponent,
    BarChartComponent,
    LineChartComponent
  ],
  entryComponents: [
    AreaChartComponent,
    BarChartComponent,
    LineChartComponent
  ]
})
export class AppExampleModule {

}
