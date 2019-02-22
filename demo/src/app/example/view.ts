import {AreaChartComponent} from "./area-chart/areaChart.component";
import {BarChartComponent} from "./bar-chart/barChart.component";
import {LineChartComponent} from "./line-chart/lineChart.component";

interface Example {
  title: string;
  component: any;
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
          basic: {
            title: '基本使用',
            component: AreaChartComponent
          }
        }
      },
      {
        title: 'Line Chart',
        examples: [
          {
            title: '基本使用',
            component: LineChartComponent
          }
        ]
      },
      {
        title: 'Bar Chart',
        examples: [
          {
            title: '基本使用',
            component: BarChartComponent
          }
        ]
      }
    ]
  }
]
