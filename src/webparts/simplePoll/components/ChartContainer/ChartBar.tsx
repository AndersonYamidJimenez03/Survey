import * as React from 'react';

import './ChartBar.module.scss';

const ChartBar = (props) => {
  let barFillWidth = '0%';



  if (props.maxValue > 0) {
    barFillWidth = Math.round((props.value / props.maxValue) * 100) + '%';
  }

  return (
    <div className='chartBar'>
      <div className='chartBarLabel'>{props.label}</div>
      <div className='chartBarInner'>
        <div
          className='chartBarFill'
          style={{ width: barFillWidth }}
        ></div>
      </div>
      
    </div>
  );
};

export default ChartBar;