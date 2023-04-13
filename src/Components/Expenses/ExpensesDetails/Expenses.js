import React, { useState } from 'react'
import './Expenses.css';
import ExpensesList from '../ExpensesList/ExpensesList'
import ExpensesChart from '../ExpensesChart/ExpensesChart';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';

const Expenses = (props) => {
    const [filteredYear, SetFilteredYear] = useState("2023");

    const filterChangeHandler = (selectedYear) => {
      SetFilteredYear(selectedYear);
    };
  
    const yearResult2 =props.previousData.filter((value)=>{
      var event = new Date(value.date);
   var event1 = JSON.stringify(event).slice(1,5);
   // console.log(event1);
   console.log(filteredYear);
   // let date = JSON.stringify(event);
 return  event1 === filteredYear ;
 });

 console.log(yearResult2);
  return (
    <div>
        <div className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
            <ExpensesChart expenses = {yearResult2}/>
            <ExpensesList filteredExpenses = {yearResult2}/>
    </div>
    </div>
  )
}

export default Expenses