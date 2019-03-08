import {Directive, Input} from "@angular/core";
import {SvgService} from "../svg/svg.service";


@Directive({
  selector: 'nc-axis',
  exportAs: 'ncAxis'
})
export class AxisDirective {

  @Input() type: string;

  @Input() label: string;

  render() {
    console.log('redner:', this.svgService.svg)
  }

  constructor(private svgService: SvgService) {
    console.log('axis::', this.svgService);

    this.svgService.valueChange
      .subscribe(() => {
        this.render();
      });


  }

}
