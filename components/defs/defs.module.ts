import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {DefsDirective} from "./defs.directive";
import {LinearGradientDirective} from "./linear-gradient.directive";
import {StopDirective} from "./stop.directive";

@NgModule({
  declarations: [DefsDirective, LinearGradientDirective, StopDirective],
  exports: [DefsDirective, LinearGradientDirective, StopDirective],
  schemas: [NO_ERRORS_SCHEMA]
})
export class DefsModule{

}
