import {ModuleWithProviders, NgModule} from "@angular/core";
import {AreaModule} from "./area/area.module";
import {SVGModule} from "./svg/svg.module";
import {AxisModule} from "./axis/axis.module";

// SVG
export {SVGModule} from './svg/svg.module';
export {SvgDirective} from './svg/svg.directive';

// Axis
export {AxisModule} from './axis/axis.module';
export {AxisXDirective} from './axis/axis-x.directive';
export {AxisYDirective} from './axis/axis-y.directive';

// Area Chart
export {AreaModule} from './area/area.module';
export {AreaComponent} from "./area/area.component";


import "./style/ng-chart.scss";

@NgModule({
  exports: [AreaModule, SVGModule, AxisModule]
})
export class NgChartModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgChartModule
    }
  }
}
