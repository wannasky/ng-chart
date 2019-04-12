import {Component} from "@angular/core";
import * as d3 from 'd3';
import {fromPromise} from "rxjs/internal-compatibility";
import {Observable} from "rxjs";

@Component({
  selector: 'demo-area-chart',
  templateUrl: './basic.component.html'
})
export class AreaChartBasicComponent {

  page: any[];

  data: any[];

  getPage(): Observable<any> {
    return fromPromise(d3.json('assets/data/page.json'));
  }

  getData(): Observable<any> {
    return fromPromise(d3.csv('assets/data/date-value.csv'));
  }

  constructor(){
    this.getPage()
      .subscribe((data: any[]) => {
        this.page = data;
      });

    this.getData()
      .subscribe((data: any[]) => {
        this.data = data;
      });
  }
}
