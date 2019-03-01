import {Component, ElementRef, Input, ViewChild} from "@angular/core";

@Component({
  selector: 'nc-svg, ncSVG',
  exportAs: 'ncSVG',
  templateUrl: './svg.component.html'
})
export class SVGComponent {

  @ViewChild('svg') SVGElementRef: ElementRef;

  @Input()
  set width(value: number){
    this.SVGElementRef.nativeElement.setAttribute('width', value);
  }

  @Input()
  set height(value: number) {
    this.SVGElementRef.nativeElement.setAttribute('height', value);
  }

  constructor() {}

}
