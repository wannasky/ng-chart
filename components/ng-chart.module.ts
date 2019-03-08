import {ModuleWithProviders, NgModule} from "@angular/core";
import {AreaChartModule} from "./area-chart/area-chart.module";
import {SVGModule} from "./svg/svg.module";
import {AxisModule} from "./axis/axis.module";

// SVG
export {SVGModule} from './svg/svg.module';
export {SvgDirective} from './svg/svg.directive';

// Axis
export {AxisModule} from './axis/axis.module';
export {AxisDirective} from './axis/axis.directive';

// Area Chart
export {AreaChartModule} from './area-chart/area-chart.module';
export {AreaChartComponent} from "./area-chart/area-chart.component";

@NgModule({
  exports: [AreaChartModule, SVGModule, AxisModule]
})
export class NgChartModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgChartModule
    }
  }
}
