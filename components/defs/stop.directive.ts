import {Directive, Host, Input, OnInit} from "@angular/core";
import {LinearGradientContainer} from "./linear-gradient.container";

@Directive({
  selector: 'nc-stop'
})
export class StopDirective implements OnInit{

  @Input() offset: string = '0%';

  @Input() stopColor: string = '';

  @Input() stopOpacity: number = 1;

  constructor(@Host() private container: LinearGradientContainer){

  }

  ngOnInit(): void {
    this.container.linearGradient.append('stop')
      .attr('offset', this.offset)
      .attr('stop-color', this.stopColor)
      .attr('stop-opacity', this.stopOpacity);
  }
}
