import React, { useEffect, useState } from 'react'
import './ExpensesPage.css';
import axios from "axios";
import Expenses from './ExpensesDetails/Expenses';
import NewExpenses from './NewExpenses/NewExpenses';


const ExpensesPage = () => {

  const [previousData, SetPreviousdata] = useState([]);
  let loadData = async ()=>{
   
    let users = await axios.get('https://money-manager-ei85.onrender.com/expenseItems');
    console.log(users);
  
    SetPreviousdata(users.data)
       
  };
  useEffect(()=>{
    loadData();
  },[]);

  const [expenses,SetExpenses] = useState(previousData);


  const addExpenseHandler = (expense)=>{
    SetExpenses([expense,...expenses]);
  };
  console.log(previousData);
  return (
    <div>
      <div className='Expense-heading'>
      <h2>Expense List </h2>
      </div>
  

       <NewExpenses onAddExpense = {addExpenseHandler}/>
       <Expenses previousData = {previousData}/>
        
        
        </div>
  )
}

export default ExpensesPage