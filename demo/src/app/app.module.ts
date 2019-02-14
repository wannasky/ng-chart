import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppFrameworkModule} from "./framework/framework.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppFrameworkModule],
  bootstrap: [AppComponent]
})
export class AppModule {

}
