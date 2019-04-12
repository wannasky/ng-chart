import {AreaChartBasicComponent} from "./basic-charts/area-chart/basic/basic.component";

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
          'basic': {
            title: '基本使用',
            component: AreaChartBasicComponent,
            source: [Source.HTML, Source.TS, Source.SCSS, {name: 'JSON', filename: 'data/data.json'}]
          }
        }
      }
    ]
  }
]
