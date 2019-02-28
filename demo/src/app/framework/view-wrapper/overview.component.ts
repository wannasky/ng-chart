import {Component} from "@angular/core";
import {AppViewService} from "../../example/view.service";

@Component({
  selector: 'demo-overview',
  templateUrl: './overview.component.html'
})
export class AppOverviewComponent {

  view: any;

  constructor(private viewService: AppViewService) {
    this.view = this.viewService.getView();
  }
}
