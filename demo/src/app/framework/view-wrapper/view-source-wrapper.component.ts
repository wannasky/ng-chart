import {Component, Injector, Input} from "@angular/core";
import {AppViewService} from "../../example/view.service";
import {ComponentPortal} from "@angular/cdk/portal";

@Component({
  selector: 'demo-view-source-wrapper',
  templateUrl: './view-source-wrapper.component.html',
  styleUrls: ['./view-source-wrapper.component.scss']
})
export class ViewSourceWrapperComponent {

  private _example: string;

  public showSource = false;

  public tabs: {name: string;filename: string}[] = [];

  public currentTab: string;

  public componentPortal: ComponentPortal<any>;

  public title: string = '';

  @Input()
  get example() {
    return this._example;
  }

  set example(name: string) {
    this._example = name;
    const view = this.viewService.getViewExample();
    if(view && view.examples[name]) {
      const chart = view.examples[name];
      this.title = chart.title;
      this.componentPortal = new ComponentPortal(chart.component, null, this.injector);
      this.generateTabs(chart.source);
    }
  }

  constructor(public viewService: AppViewService, private injector: Injector) {
  }

  switchTab(tabName) {
    this.currentTab = tabName;
  }

  getTabLinkUrl(): string {
    return this.tabs.find(item => {
      return item.name === this.currentTab;
    }).filename;
  }

  private generateTabs(_tabs) {
    const {category, chart} = this.viewService.getView();
    const baseUrl = `assets/${category}/${chart}/`;
    let tabs = [];
    if(_tabs) {
      _tabs.forEach(item => {
        if(typeof item === 'string'){
          tabs.push({name: item, filename: `${baseUrl}/${this.example}.component-${item.toLowerCase()}.html`});
        }else {
          const suffixIndex = item.filename.lastIndexOf('.');
          const filename = item.filename.slice(0, suffixIndex);
          const extname = item.filename.slice(suffixIndex + 1);
          tabs.push({name: item.name, filename: `${baseUrl}/${filename}-${extname}.html`});
        }
      });
    }else{
      ['HTML', 'TS', 'CSS'].forEach(item => {
        tabs.push({name: item, filename: `${baseUrl}/${this.example}.component-${item.toLowerCase()}.html`});
      });
    }
    this.currentTab = tabs[0].name;
    this.tabs = tabs;
  }

  toggleShowSource(): void {
    this.showSource = !this.showSource;
  }

}
