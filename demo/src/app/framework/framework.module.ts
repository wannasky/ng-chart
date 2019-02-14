import {NgModule} from "@angular/core";
import {AppHeaderComponent} from "./header/header.component";
import {AppBodyComponent} from "./body/body.component";

@NgModule({
  declarations: [AppHeaderComponent, AppBodyComponent],
  exports: [AppHeaderComponent, AppBodyComponent]
})
export class AppFrameworkModule {

}
