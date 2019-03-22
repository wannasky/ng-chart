import {Inject, Injectable, InjectionToken} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {State} from "../common/state";
import * as d3 from 'd3';

@Injectable()
export class SvgService {

  private tokenMap = new WeakMap<any, any>();

  public state = new BehaviorSubject<State>(State.WAITING);

  private _svg: SVGElement;

  private _width: number;

  private _height: number;

  private _data: any;

  private chartKey: string[] = [];

  private _padding = '0 30 30 60';

  set padding(value: any) {
    const padding = value.split(' ').map(item => Number.parseInt(item));
    if (padding.length === 1) {
      this._padding = `${padding[0]} ${padding[0]} ${padding[0]} ${padding[0]}`;
    } else if (padding.length === 2) {
      this._padding = `${padding[0]} ${padding[1]} ${padding[0]} ${padding[1]}`;
    } else if (padding.length === 3) {
      this._padding = `${padding[0]} ${padding[1]} ${padding[2]} ${padding[1]}`;
    } else if (padding.length === 4) {
      this._padding = padding.join(' ');
    }
  }

  get padding(): any {
    const padding = this._padding.split(' ');
    return {
      top: Number.parseInt(padding[0]),
      right: Number.parseInt(padding[1]),
      bottom: Number.parseInt(padding[2]),
      left: Number.parseInt(padding[3])
    }
  }

  set svg(value: SVGElement) {
    this._svg = value;
  }

  get svg(): SVGElement {
    return this._svg;
  }

  set width(value: number) {
    this._width = value;
  }

  get width(): number {
    return this._width;
  }

  set height(value: number) {
    this._height = value;
  }

  get height(): number {
    return this._height;
  }

  set data(value: any) {
    try {
      this._data = JSON.parse(JSON.stringify(value));
    } catch (e) {
      this._data = value;
    }
  }

  get data(): any {
    return this._data;
  }

  addChartKey(key: string) {
    this.chartKey.push(key);
    this.chartKey = Array.from(new Set(this.chartKey));
  }

  getChartExtent(): [string, string] | [undefined, undefined] {
    let keysExtent = this.chartKey.map(item => {
      return d3.extent(this.data, (iitem) => {
        return iitem[item];
      });
    });
    return d3.extent(d3.merge(keysExtent));
  }

  constructor() {

  }

}
