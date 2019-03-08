import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {AxisDirective} from "./axis.directive";

@NgModule({
  declarations: [AxisDirective],
  exports: [AxisDirective],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AxisModule {

}
