import {ModuleWithProviders, NgModule} from "@angular/core";

@NgModule({
  imports: [],
  exports: []
})
export class NgChartModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgChartModule
    }
  }
}
