import {Component} from "@angular/core";
import {View} from "../../example/view";
import {AppViewService} from "../../example/view.service";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class AppInfoComponent {

  views: View[];

  constructor(private appViewService: AppViewService) {
    this.views = this.appViewService.getViews();
  }
}
