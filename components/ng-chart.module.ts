import {ModuleWithProviders, NgModule} from "@angular/core";
import {AreaModule} from "./area/area.module";
import {AxisModule} from "./axis/axis.module";
import {DefsModule} from "./defs/defs.module";
import {GridModule} from "./grid/grid.module";

@NgModule({
  exports: [AreaModule, AxisModule, DefsModule, GridModule]
})
export class NgChartModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgChartModule
    }
  }
}
