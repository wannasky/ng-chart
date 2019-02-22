import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppFrameworkModule} from "./framework/framework.module";
import {AppRoutingModule} from "./app.routing.module";
import {AppExampleModule} from "./example/example.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppFrameworkModule, AppRoutingModule, AppExampleModule],
  bootstrap: [AppComponent]
})
export class AppModule {

}
