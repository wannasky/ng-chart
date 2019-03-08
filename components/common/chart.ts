import {AfterContentInit, ContentChildren, ElementRef, Input, QueryList, ViewChild} from "@angular/core";
import {AxisDirective} from "../axis/axis.directive";
import {SvgService} from "../svg/svg.service";
import {SvgDirective} from "../svg/svg.directive";

export class Chart implements AfterContentInit{

  @Input() width: number;

  @Input() height: number;

  @Input() data: any;

  @ContentChildren(AxisDirective) axisList: QueryList<AxisDirective>;

  @ViewChild(SvgDirective, {read: ElementRef}) svg: ElementRef;

  constructor(protected svgService: SvgService) {
  }

  ngAfterContentInit(): void {
    this.svgService.svg = this.svg.nativeElement;
  }


}
