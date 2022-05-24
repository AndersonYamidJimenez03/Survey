import * as React from 'react';

import ChartBar from './ChartBar';
import './Chart.module.scss';

const Chart = (props) => {
//   const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
//   const totalMaximum = Math.max(...dataPointValues);

   
  return (
    <div className='chart'>
      <div className='chartInner3'>
      {props.data.datasets.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.data}
          maxValue={10}
          label={dataPoint.label}
        />
      ))}
      </div>
    </div>
  );
};

export default Chart;