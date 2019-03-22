import {
  Component, Inject, OnChanges, SimpleChanges, SkipSelf,
} from "@angular/core";
import {Chart} from "../common/chart";
import {SvgService} from "../svg/svg.service";
import {CHART_ACCESSOR} from "../common/token";

@Component({
  selector: 'nc-area, ncArea',
  exportAs: 'ncArea',
  template: '<svg nc-svg [width]="width" [height]="height"></svg>',
  providers: [
    {provide: CHART_ACCESSOR, useValue: 'area', multi: true}
  ]
})
export class AreaComponent extends Chart implements OnChanges{

  constructor(protected svgService: SvgService, @Inject(CHART_ACCESSOR) accessor: any) {
    super(svgService);
    console.log(accessor)
  }

  ngOnChanges(changes: SimpleChanges): void {
    for(let key in changes){
      this.svgService[key] = changes[key].currentValue;
    }
  }

}
