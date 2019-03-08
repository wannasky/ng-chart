import {Directive, ElementRef, Input} from "@angular/core";

@Directive({
  selector: '[nc-svg]',
  exportAs: 'ncSVG'
})
export class SvgDirective {

  @Input()
  set width(value: number){
    if(value !== undefined) {
      this.elementRef.nativeElement.setAttribute('width', value);
    }else {
      this.elementRef.nativeElement.removeAttribute('width');
    }
  }

  @Input()
  set height(value: number) {
    if(value !== undefined){
      this.elementRef.nativeElement.setAttribute('height', value);
    }else {
      this.elementRef.nativeElement.removeAttribute('height');
    }
  }

  constructor(private elementRef: ElementRef) {}

}
