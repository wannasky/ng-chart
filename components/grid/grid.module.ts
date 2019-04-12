import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {GridDirective} from "./grid.directive";

@NgModule({
  declarations: [GridDirective],
  exports: [GridDirective],
  schemas: [NO_ERRORS_SCHEMA]
})
export class GridModule {

}
