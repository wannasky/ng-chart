import {NgModule} from "@angular/core";
import {AppHeaderComponent} from "./header/header.component";
import {AppBodyComponent} from "./body/body.component";
import {AppViewWrapperComponent} from "./view-wrapper/view-wrapper.component";
import {AppInfoComponent} from "./info/info.component";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {AppOverviewComponent} from "./view-wrapper/overview.component";
import {AppExampleComponent} from "./view-wrapper/example.component";

@NgModule({
  declarations: [
    AppHeaderComponent,
    AppBodyComponent,
    AppInfoComponent,
    AppViewWrapperComponent,
    AppOverviewComponent,
    AppExampleComponent
  ],
  imports: [RouterModule, CommonModule],
  exports: [AppHeaderComponent,
    AppBodyComponent,
    AppInfoComponent,
    AppViewWrapperComponent,
    AppOverviewComponent,
    AppExampleComponent
  ]
})
export class AppFrameworkModule {

}
