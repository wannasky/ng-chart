import {NgModule} from "@angular/core";
import {AreaChartComponent} from "./basic-charts/area-chart/areaChart.component";
import {BarChartComponent} from "./basic-charts/bar-chart/barChart.component";
import {LineChartComponent} from "./basic-charts/line-chart/lineChart.component";

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
