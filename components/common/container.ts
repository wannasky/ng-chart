import {
  AfterViewInit,
  ElementRef,
  Input,
  OnChanges, OnInit,
  SimpleChanges,
  ViewChild
} from "@angular/core";
import {select, Selection} from "d3-selection";
import {Observable, Subject} from "rxjs";
import {Event, ViewChange, ViewReady} from "./events";

interface Padding {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export class Container implements OnChanges, OnInit, AfterViewInit{

  private _root: Selection<SVGElement, any, Element, any>;

  private _width: number;

  private _height: number;

  private _data: any;

  private _padding: Padding = {top: 30, right: 30, bottom: 30, left: 30};

  private simpleChanges: SimpleChanges = {};

  private isDispatched: boolean = false;  // 是否分发过

  private isAfterViewInit: boolean = false; // 视图是否完成

  // 事件集合
  public readonly events: Observable<Event> = new Subject<Event>();

  get eventSubject(): Subject<Event> {
    return this.events as Subject<Event>;
  }

  @Input()
  set width(value: number) {
    this._width = Number.parseFloat(`${value}`);
  }

  get width(): number {
    return this._width;
  }

  @Input()
  set height(value: number) {
    this._height = Number.parseFloat(`${value}`);
  }

  get height(): number {
    return this._height;
  }

  @Input()
  set data(value: any) {
    this._data = value;
  }

  get data(): any {
    return this._data;
  }

  @Input()
  // @ts-ignore
  set padding(value: string) {
    const padding = value.split(' ').map(item => Number.parseInt(item));
    if (padding.length === 1) {
      this._padding = {top: padding[0], right: padding[0], bottom: padding[0], left: padding[0]};
    } else if (padding.length === 2) {
      this._padding = {top: padding[0], right: padding[1], bottom: padding[0], left: padding[1]};
    } else if (padding.length === 3) {
      this._padding = {top: padding[0], right: padding[1], bottom: padding[2], left: padding[1]};
    } else if (padding.length === 4) {
      this._padding = {top: padding[0], right: padding[1], bottom: padding[2], left: padding[3]};
    }
  }

  // @ts-ignore
  get padding(): Padding {
    return this._padding;
  }

  @ViewChild('root')
  // @ts-ignore
  set root(root: ElementRef) {
    this._root = select(root.nativeElement);
  }

  // @ts-ignore
  get root(): Selection<SVGElement, any, Element, any> {
    return this._root;
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (let key in changes) {
      // 缓存最新的changes
      this.simpleChanges[key] = changes[key];
    }

    // 必须等到视图初始化完成后才发布
    if(!this.isAfterViewInit) return;

    if(this.isDispatched) {
      this.eventSubject.next(new ViewReady(this.simpleChanges));
      this.eventSubject.next(new ViewChange(this.simpleChanges, changes));
    }else {
      let allChangeIsReady = true;
      for(let key in this.simpleChanges) {
        if(this.simpleChanges[key].currentValue === undefined){
          allChangeIsReady = false;
        }
      }
      if(allChangeIsReady) {
        this.eventSubject.next(new ViewReady(this.simpleChanges));
        this.isDispatched = true;
      }
    }
  }

  ngOnInit(): void {
    this.root
      .attr('width', this.width)
      .attr('height', this.height)
      .attr('class', 'nc-svg');
  }

  ngAfterViewInit(): void {
    this.isAfterViewInit = true;
    this.ngOnChanges(this.simpleChanges);
  }

}

