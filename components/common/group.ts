import {Selection} from "d3-selection";
import {OnChanges, SimpleChanges} from "@angular/core";
import {Container} from "./container";
import {GroupChange, GroupReady, ViewReady} from "./events";
import {filter} from "rxjs/operators";


export abstract class Group implements OnChanges{

  public props: SimpleChanges = {};

  private propsIsReady: boolean = false;

  // 当前组件所在group
  group: Selection<SVGGElement, any, Element, any>;

  // 渲染
  abstract render(args?: any): void;

  // ready
  ready() {
    this.viewContainer.eventSubject.next(new GroupReady(this));
  }

  // prop change
  propChange(changes: SimpleChanges) {
    this.ngOnChanges(changes);
  }

  constructor(private viewContainer: Container) {
    this.viewContainer.events
      .pipe(
        filter(event => event instanceof ViewReady)
      )
      .subscribe(() => {
        this.ngOnChanges(this.props);
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    for(let key in changes){
      this.props[key] = changes[key];
    }
    if(this.propsIsReady) {
      this.viewContainer.eventSubject.next(new GroupChange(this, this.props, changes));
    }else {
      let allChangeIsReady = true;
      for(let key in this.props) {
        if(this.props[key].currentValue === undefined){
          allChangeIsReady = false;
        }
      }
      if(allChangeIsReady) {
        this.propsIsReady = true;
      }
    }
  }

}
