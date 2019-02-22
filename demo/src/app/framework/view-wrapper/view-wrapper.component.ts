import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {combineLatest} from "rxjs";

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

  constructor(private route: ActivatedRoute) {
    combineLatest(route.params)
      .subscribe(data => {
        console.log(data)
      })
  }
}
