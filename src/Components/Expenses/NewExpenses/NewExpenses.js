import React, { useState } from 'react'
import './NewExpenses.css';
import ExpenseForm from '../ExpenseForm/ExpenseForm';

const NewExpenses = (props) => {
    const [editing,setEditing] = useState(false);

    const startEditingHandler = ()=>{
      setEditing(true);
    };

    const StopEditingHandler = ()=>{
      setEditing(false);
    };
  const saveExpenseDataHandler = (enteredExpenseData)=>{
      const expenseData = {
          ...enteredExpenseData,
          id: Math.random().toString()
      };
      props.onAddExpense(expenseData);
      setEditing(false);
  };
return (
  <div className='new-expense'>
   {!editing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {editing && <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onCancel = {StopEditingHandler}/>}
  </div>
);
};

export default NewExpenses