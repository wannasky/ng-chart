import {EventEmitter, Injectable} from "@angular/core";
import {ValueChange} from "../common/valueChange";
import {Observable, Subject} from "rxjs";
import {debounceTime, takeWhile} from "rxjs/operators";

@Injectable()
export class SvgService {

  private _valueChange = new Subject<ValueChange>();

  private valueChange = new EventEmitter<ValueChange>();

  private _svg: SVGElement;

  private _width: number;

  private _height: number;

  private _data: any;

  set svg(value: SVGElement) {
    const previousValue = this.svg;
    this._svg = value;
    this._valueChange.next({key: 'svg', previousValue, currentValue: value});
  }

  get svg(): SVGElement {
    return this._svg;
  }

  set width(value: number) {
    const previousValue = this.width;
    this._width = value;
    this._valueChange.next({key: 'width', previousValue, currentValue: value});
  }

  get width(): number {
    return this._width;
  }

  set height(value: number) {
    const previousValue = this.height;
    this._height = value;
    this._valueChange.next({key: 'height', previousValue, currentValue: value});
  }

  get height(): number {
    return this._height;
  }

  set data(value: any) {
    const previousValue = this.data;
    try {
      this._data = JSON.parse(JSON.stringify(value));
    } catch (e) {
      this._data = value;
    }
    this._valueChange.next({key: 'data', previousValue, currentValue: this.data});
  }

  get data(): any {
    return this._data;
  }

  constructor() {
    this._valueChange
      .pipe(
        debounceTime(20),
        takeWhile(() => !!this.svg)
      )
      .subscribe((event) => {
        this.valueChange.emit(event);
      });
  }

}
