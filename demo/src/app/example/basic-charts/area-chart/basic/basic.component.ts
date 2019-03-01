import {Component} from "@angular/core";
import * as d3 from 'd3';
import {fromPromise} from "rxjs/internal-compatibility";

@Component({
  selector: 'demo-area-chart',
  templateUrl: './basic.component.html'
})
export class AreaChartBasicComponent {

  data: any[];

  constructor(){
    fromPromise(d3.json('assets/data/page.json'))
      .subscribe((data: any[]) => {
        this.data = data;
        console.log('data', data)
      });
  }
}
