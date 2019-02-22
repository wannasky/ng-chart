import {Injectable} from "@angular/core";
import {view, View} from "./view";

@Injectable({
  providedIn: "root"
})
export class AppViewService {

  private views: View[];

  getViews(): View[] {
    return this.views;
  }

  constructor() {
    this.views = view.map(item => {
      item.path = item.path || item.category.toLowerCase().replace(' ', '-');
      item.list = item.list.map(iitem => {
        iitem.path = iitem.path || (iitem.title.toLowerCase().replace(' ', '-'));
        iitem.img = iitem.img || `assets/${item.path}/${iitem.path}.png`;
        return iitem;
      });
      return item;
    });
  }
}
