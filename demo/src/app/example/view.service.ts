import {Injectable} from "@angular/core";
import {view, View} from "./view";

@Injectable({
  providedIn: "root"
})
export class AppViewService {

  private views: View[];

  private _view: any;

  getViews(): View[] {
    return this.views;
  }

  getViewExample(): any {
    const category = this.views.filter(item => {
      return item.path === this._view.category;
    })[0];
    if (category) {
      return category.list.filter(item => {
        return item.path === this._view.chart;
      })[0];
    }
    return null;
  }

  getView(){
    return this._view;
  }

  setCurrentView(view: any) {
    this._view = view;
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
