import React from 'react'
import './ExpensesList.css';
import Expensesitem from '../ExpensesItem/Expensesitem';

const ExpensesList = (props) => {
    if(props.filteredExpenses.length === 0){
        return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
    }
  return (<ul className='expenses-list'>
  {
       props.filteredExpenses.map((value, index) => {
          return  <Expensesitem
                   key={index}
                   id = {value._id}
                   title={value.title}
                   amount={value.amount}
                   date={value.date}
                  />
            
         
        })
  }
</ul>
  )
}

export default ExpensesList