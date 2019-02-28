import {NgModule} from "@angular/core";
import {AppHeaderComponent} from "./header/header.component";
import {AppBodyComponent} from "./body/body.component";
import {AppViewWrapperComponent} from "./view-wrapper/view-wrapper.component";
import {AppInfoComponent} from "./info/info.component";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {AppOverviewComponent} from "./view-wrapper/overview.component";
import {AppExampleComponent} from "./view-wrapper/example.component";
import {DemoViewLoadComponent} from "./view-load/view-load.component";
import {HttpClientModule} from "@angular/common/http";
import {PortalModule} from "@angular/cdk/portal";
import {ViewSourceWrapperComponent} from "./view-wrapper/view-source-wrapper.component";

@NgModule({
  declarations: [
    AppHeaderComponent,
    AppBodyComponent,
    AppInfoComponent,
    AppViewWrapperComponent,
    AppOverviewComponent,
    AppExampleComponent,
    DemoViewLoadComponent,
    ViewSourceWrapperComponent
  ],
  imports: [RouterModule, CommonModule, HttpClientModule, PortalModule],
  exports: [AppHeaderComponent,
    AppBodyComponent,
    AppInfoComponent,
    AppViewWrapperComponent,
    AppOverviewComponent,
    AppExampleComponent,
    DemoViewLoadComponent,
    ViewSourceWrapperComponent
  ],
  entryComponents: [ViewSourceWrapperComponent]
})
export class AppFrameworkModule {

}
