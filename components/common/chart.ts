import {AfterContentInit, ContentChild, ElementRef,Input, ViewChild} from "@angular/core";
import {SvgService} from "../svg/svg.service";
import {SvgDirective} from "../svg/svg.directive";
import {AxisXDirective} from "../axis/axis-x.directive";
import {BehaviorSubject} from "rxjs";

export class Chart implements AfterContentInit{

  public state = new BehaviorSubject({});

  @Input() width: number;

  @Input() height: number;

  @Input() data: any;

  @ViewChild(SvgDirective, {read: ElementRef}) svg: ElementRef;

  @ContentChild(AxisXDirective) AxisXDirective: AxisXDirective;

  constructor(protected svgService: SvgService) {
  }

  ngAfterContentInit(): void {
    // this.svgService.svg = this.svg.nativeElement;
  }


}
