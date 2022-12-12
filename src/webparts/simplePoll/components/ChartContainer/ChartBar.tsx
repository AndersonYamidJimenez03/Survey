import * as React from 'react';

import styles from './ChartBar.module.scss';

const ChartBar = (props) => {
  let barFillWidth = '0%';



  if (props.responses > 0) {
    barFillWidth = Math.round((props.value / props.responses) * 100) + '%';
  }
  

  return (
    <div className={styles.chartBar}>
      <div className={styles.chartBarLabel}>{props.label}</div>
      <div className={styles.chartBarInner}>
      <div className={styles.percentage}>{barFillWidth}</div>
        <div
          className={styles.chartBarFill}
          style={{ width: barFillWidth }}
        ></div>
      </div>
    </div>
  );
};

export default ChartBar;