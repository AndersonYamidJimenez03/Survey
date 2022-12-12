import * as React from 'react';

import ChartBar from './ChartBar';
import styles from './Chart.module.scss';

const Chart = (props) => {
//   const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
//   const totalMaximum = Math.max(...dataPointValues);

   
  return (
    <div className={styles.chart}>
      <div className={styles.chartInner}>
      {props.data.datasets.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          responses={props.data.totalResponses}
          label={dataPoint.label}
        />
      ))}
      </div>
    </div>
  );
};

export default Chart;