import * as React from 'react';
import { ChartControl, ChartType } from '@pnp/spfx-controls-react/lib/ChartControl';
import { IPollAnalyticsInfo } from '../../../../Models';
import Chart from './Chart';
import Data from './Data';

export interface IQuickPollChartProps {
  PollAnalytics: IPollAnalyticsInfo;
}

export default class QuickPollChart extends React.Component<IQuickPollChartProps, {}> {
  private charttype: ChartType = null;
  public render(): React.ReactElement<IQuickPollChartProps> {
    return (
      <div>
        <div className="ms-Grid" dir="ltr">
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-lg12 ms-md12 ms-sm12">
              <div className="ms-textAlignLeft ms-font-m-plus ms-fontWeight-semibold">
                {this.props.PollAnalytics ? this.props.PollAnalytics.Question : ''}
              </div>
            </div>
          </div>
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-lg12 ms-md12 ms-sm12">
              {this.renderChart()}
            </div>
          </div>
        </div>
      </div>
    );
  }

  private renderChart(): JSX.Element {
    const { PollAnalytics } = this.props;



    if (undefined !== this.props.PollAnalytics) {
      this.getChartType();
      return (        
            <Chart
              loadingtemplate={() => <div>Please wait...</div>}
              type={this.charttype}
              data={{
                labels: PollAnalytics.Labels,
                datasets: 
               this.getData(PollAnalytics.Labels,PollAnalytics.PollResponse),
                totalResponses: this.getTotalResponses(PollAnalytics.PollResponse)            
              }} />
  
          );
    }
  }

  private getChartType = () => {
    switch (this.props.PollAnalytics.ChartType.toLocaleLowerCase()) {
      case 'pie':
        this.charttype = ChartType.Pie;
        break;
      case 'doughnut':
        this.charttype = ChartType.Doughnut;
        break;
      case 'bar':
        this.charttype = ChartType.Bar;
        break;
      case 'horizontalbar':
        this.charttype = ChartType.HorizontalBar;
        break;
      case 'line':
        this.charttype = ChartType.Line;
        break;
      default:
        this.charttype = ChartType.Doughnut;
        break;
    }
  }

  private getData = (arr1:string[], arr2:number[])=>{
    let arr: Data[] = [];
    let obj:Data;
    for(let i=0; i < arr2.length; i++){
          obj = {
          label: arr1[i],
          value: arr2[i]
        };
        arr.push(obj);
    }
    return arr;
  }

  private getTotalResponses = (arr2:number[])=>{
    let sum:number =0;
    arr2.map((ele)=>{
      sum +=ele;
    });
    return sum;
  }

}