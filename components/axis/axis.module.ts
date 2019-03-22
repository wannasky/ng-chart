import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {AxisXDirective} from "./axis-x.directive";
import {AxisYDirective} from "./axis-y.directive";

@NgModule({
  declarations: [AxisXDirective, AxisYDirective],
  exports: [AxisXDirective, AxisYDirective],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AxisModule {

}
