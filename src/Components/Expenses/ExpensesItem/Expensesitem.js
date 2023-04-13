import React from 'react'
import './Expensesitem.css';
import axios from "axios";
import ExpensesDate from '../ExpensesDate/ExpensesDate'

const Expensesitem = (props) => {
  console.log(props.id);
 
        let userDelete = async (id)=>{
          try {
            let ask = window.confirm(
              "Do you want Delete this data"
            );
            if(ask){
              await axios.delete(`https://money-manager-ei85.onrender.com/expenseItem/${id}`);
              window.location.reload();
            
            }
           
          } catch (error) {
            
          }
          
        }
  return (
    <div className="expense-item">
       <ExpensesDate date ={props.date} />
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            {/* <div className="expense-item__price">${props.amount}</div> */}
            <div className="expense-item__price">{props.amount}</div>
            {/* <button className = "edit_button" >Edit</button> */}
            <button className = "delete_button" onClick={()=>userDelete(props.id)} >Delete</button>
            {/* {
                users.map((values,index)=>{
                  return <>
                  <button className = "delete_button" onClick={()=>userDelete(values.id)} >Delete</button>
                  </>
                })
                  
              }  */}
            
        </div>
    </div>
  )
}

export default Expensesitem