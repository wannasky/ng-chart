import {NgModule} from "@angular/core";
import {AreaChartBasicComponent} from "./basic-charts/area-chart/basic/basic.component";
import {HttpClientModule} from "@angular/common/http";
import {NgChartModule} from "ng-chart";

@NgModule({
  imports: [NgChartModule, HttpClientModule],
  declarations: [
    AreaChartBasicComponent
  ],
  exports: [
    AreaChartBasicComponent
  ],
  entryComponents: [
    AreaChartBasicComponent
  ]
})
export class AppExampleModule {

}
