import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AppViewWrapperComponent} from "./framework/view-wrapper/view-wrapper.component";
import {AppInfoComponent} from "./framework/info/info.component";
import {AppOverviewComponent} from "./framework/view-wrapper/overview.component";
import {AppExampleComponent} from "./framework/view-wrapper/example.component";

export const routes: Routes = [
  {path: '', pathMatch: 'full', component: AppInfoComponent},
  {
    path: ':category',
    children: [
      {
        path: ':chart',
        component: AppViewWrapperComponent,
        children: [
          {path: '', pathMatch: 'full', redirectTo: 'overview'},
          {path: 'overview', pathMatch: 'full', component: AppOverviewComponent},
          {path: 'example', pathMatch: 'full', component: AppExampleComponent}
        ]
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
