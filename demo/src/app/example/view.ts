import {AreaChartComponent} from "./basic-charts/area-chart/areaChart.component";
import {BarChartComponent} from "./basic-charts/bar-chart/barChart.component";
import {LineChartComponent} from "./basic-charts/line-chart/lineChart.component";


export interface Tab {
  name: string;
  filename: string;
}

export enum Source {
  HTML = 'HTML',
  TS = 'TS',
  SCSS = 'SCSS'
}

export interface Example {
  title: string;
  component: any;
  source?: any[];
}

interface Chart {
  title: string;
  path?: string;
  img?: string;
  examples?: {[key: string]: Example};
}

export interface View {
  category: string;
  path?: string;
  list: Chart[];
}


export const view: View[] = [
  {
    category: 'Basic Charts',
    list: [
      {
        title: 'Area Chart',
        examples: {
          areaChart: {
            title: '基本使用',
            component: AreaChartComponent,
            source: [Source.HTML, Source.TS, Source.SCSS, {name: 'JSON', filename: 'data/data.json'}]
          }
        }
      },
      {
        title: 'Line Chart',
        examples: {
          lineChart: {
            title: '基本使用',
            component: LineChartComponent
          }
        }
      },
      {
        title: 'Bar Chart',
        examples: {
          barChart: {
            title: '基本使用',
            component: BarChartComponent
          }
        }
      }
    ]
  }
]
