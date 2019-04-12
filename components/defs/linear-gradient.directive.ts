import {Directive, Host, Input, OnInit} from "@angular/core";
import {DefsContainer} from "./defs-container";
import {LinearGradientContainer} from "./linear-gradient.container";


@Directive({
  selector: 'nc-linear-gradient',
  exportAs: 'ncLinearGradient',
  providers:[
    {provide: LinearGradientContainer, useExisting: LinearGradientDirective}
  ]
})
export class LinearGradientDirective extends LinearGradientContainer implements OnInit{

  @Input() x1: any = 0;

  @Input() y1: any = 0;

  @Input() x2: any = 0;

  @Input() y2: any = 1;

  constructor(@Host() private defsContainer: DefsContainer) {
    super();
    this.id = this.defsContainer.generateId();
  }

  ngOnInit(): void {
    this.linearGradient = this.defsContainer.defs.append('linearGradient')
      .attr('id', this.id)
      .attr('x1', this.x1)
      .attr('x2', this.x2)
      .attr('y1', this.y1)
      .attr('y2', this.y2);
  }
}
