import React, {  useEffect, useState } from 'react'
import axios from "axios";
import './ExpenseForm.css';

const ExpenseForm = (props) => {


    const [Userdata,setUserData] = useState([]);

  

  

    const [ExpenseItem,SetExpenseItem] = useState({
        title : "",
        amount :"",
        date : ""
    });
    
      
    const reload = ()=>{
        window.location.reload();
    }


    const submitHandler = async (event)=>{
        event.preventDefault();

            console.log(ExpenseItem);

          const  response = await axios.post("https://money-manager-ei85.onrender.com/expenseItem",{
                    title : ExpenseItem.title,
                    amount : ExpenseItem.amount,
                    date   :  (new Date(ExpenseItem.date)).toString()
                });

                console.log(response);
                setUserData( response.data.items);
                console.log(Userdata); 
               
                props.onSaveIncomeData(Userdata);
              
        // props.onSaveIncomeData(IncomeItem);
      
    };

        
  return (
    <form onSubmit={submitHandler}>
        
    <div className='new-expense__controls'>
        <div className='new-expense__control'>
            <label>Title</label>
            <input type="text"  onChange={(e)=>SetExpenseItem({...ExpenseItem, title :e.target.value})} value={ExpenseItem.title}/>
        </div>
        <div className='new-expense__control'>
            <label>Amount</label>
            <input type="number" min ="0.01" step="0.01" onChange={(e)=>SetExpenseItem({...ExpenseItem, amount :e.target.value})} value={ExpenseItem.amount}/>
        </div>
        <div className='new-expense__control'>
            <label>Date</label>
            <input type="Date" min="2019-01-01" max="2023-12-31" onChange={(e)=>SetExpenseItem({...ExpenseItem, date :e.target.value})} value={ExpenseItem.date}/>
        </div>
    </div>
    <div className='new-expense__actions'> 
    <button type="button" onClick={props.onCancel}>cancel</button>
     <button type="submit" onClick={reload }>Add Expense</button>
    </div>
    </form>   
  );  
};

export default ExpenseForm