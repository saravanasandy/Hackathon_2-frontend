import React from 'react'
import Chart from '../Chart/Chart';

const ExpensesChart = (props) => {
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

    for(const expense of props.expenses){
      console.log(props.expenses);
      // const incomeMonth =  new Date(income.date).toLocaleString("en-US", {month:"long"});
        const expenseMonth = new Date(expense.date).getMonth()
        console.log(expenseMonth);
        charrtDataPoint[expenseMonth].value += Number(expense.amount);
    }
    console.log(charrtDataPoint);
  return (
    <div>
        <Chart datapoint = {charrtDataPoint}/>
    </div>
  )
}

export default ExpensesChart;