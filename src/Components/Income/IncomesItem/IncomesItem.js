import React from 'react'
import './IncomesItem.css';
import axios from "axios";
import IncomesDate from '../IncomesDate/IncomesDate';

const IncomesItem = (props) => {
    console.log(props.id);

        let userDelete = async (id)=>{
          try {
            let ask = window.confirm(
              "Do you want Delete this data"
            );
            if(ask){
              await axios.delete(`http://localhost:3005/item/${id}`);
              window.location.reload();
            }
           
          } catch (error) {
            
          }
          
        }
 
  // console.log(users.title);

  

  return (
    <div className="income-item">
    <IncomesDate date ={props.date} />
     <div className="income-item__description">
         <h2>{props.title}</h2>
         {/* <div className="expense-item__price">${props.amount}</div> */}
         <div className="income-item__price">{props.amount}</div>
         {/* <button className = "edit_button" >Edit</button> */}
      
         <button className = "delete_button" onClick={()=>userDelete(props.id)} >Delete</button>
             
     </div>
 </div>
  )
}

export default IncomesItem