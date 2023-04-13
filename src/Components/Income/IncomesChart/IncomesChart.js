import React from 'react'
import Chart from '../Chart/Chart';

const IncomesChart = (props) => {
    const charrtDataPoint = [
        {label : 'Jan',value : 0},
        {label : 'Feb',value : 0},
        {label : 'Mar',value : 0},
        {label : 'Apr',value : 0},
        {label : 'May',value : 0},
        {label : 'Jun',value : 0},
        {label : 'Jul',value : 0},
        {label : 'Aug',value : 0},
        {label : 'Sep',value : 0},
        {label : 'Oct',value : 0},
        {label : 'Nov',value : 0},
        {label : 'Dec',value : 0}
    ];

    for(const income of props.incomes){
      console.log(props.incomes);
      // const incomeMonth =  new Date(income.date).toLocaleString("en-US", {month:"long"});
        const incomeMonth = new Date(income.date).getMonth()
        console.log(incomeMonth);
        charrtDataPoint[incomeMonth].value += Number(income.amount);
    }
    console.log(charrtDataPoint);
  return (
    <div>
        <Chart datapoint = {charrtDataPoint}/>
    </div>
  )
}

export default IncomesChart