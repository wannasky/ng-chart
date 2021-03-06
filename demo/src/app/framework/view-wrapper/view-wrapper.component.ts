import {Component} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {combineLatest} from "rxjs";
import {AppViewService} from "../../example/view.service";
import {map} from "rxjs/operators";

interface Menu {
  name: string;
  path: string;
}

@Component({
  selector: 'demo-view-wrapper',
  templateUrl: './view-wrapper.component.html',
  styleUrls: ['./view-wrapper.component.scss']
})
export class AppViewWrapperComponent {

  menus: Set<Menu> = new Set([
    {name: '使用说明', path: 'overview'},
    {name: '示例', path: 'example'}
  ]);

  constructor(private route: ActivatedRoute, private viewService: AppViewService) {
    combineLatest(route.params, route.parent.params)
      .pipe(
        map((item: [Params, Params]) => item[0])
      )
      .subscribe(data => {
        this.viewService.setCurrentView(data);
      });
  }
}
