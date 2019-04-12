import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {TooltipDirective} from "./tooltip.directive";

@NgModule({
  declarations: [TooltipDirective],
  exports: [TooltipDirective],
  schemas: [NO_ERRORS_SCHEMA]

})
export class TooltipModule {

}
