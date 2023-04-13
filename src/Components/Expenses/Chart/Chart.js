import React from 'react'
import './Chart.css';
import ChartBar from '../ChartBar/ChartBar'

const Chart = (props) => {
    const dataPointvalues = props.datapoint.map((dataPoint)=>dataPoint.value);
  const totalMaximum = Math.max(...dataPointvalues);
  return (
    <div className="chart">
    {props.datapoint.map((dataPoint, index) => (
      <ChartBar
        key={index}
        value={dataPoint.value}
        maxValue={totalMaximum}
        label={dataPoint.label}
      />
    ))}
  </div>
  )
}

export default Chart