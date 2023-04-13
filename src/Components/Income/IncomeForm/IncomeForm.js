import React, {  useEffect, useState } from 'react'

import axios from "axios";
import './IncomeForm.css';



const IncomeForm = (props) => {
 
    const [Userdata,setUserData] = useState([]);

  

  

    const [IncomeItem,SetIncomeItem] = useState({
        title : "",
        amount :"",
        date : ""
    });
    
      
 


    const submitHandler = async (event)=>{
        event.preventDefault();
       
            console.log(IncomeItem);

          const  response = await axios.post("https://money-manager-ei85.onrender.com/item",{
                    title : IncomeItem.title,
                    amount : IncomeItem.amount,
                    date   :  (new Date(IncomeItem.date)).toString()
                });

                console.log(response);
                setUserData( response.data.items);
                console.log(Userdata); 
                window.location.reload();
                props.onSaveIncomeData(Userdata);
               
        // props.onSaveIncomeData(IncomeItem);
      
    };

  return (


<form onSubmit={submitHandler}>
        
<div className='new-income__controls'>
    <div className='new-income__control'>
        <label>Title</label>
        <input type="text"  onChange={(e)=>SetIncomeItem({...IncomeItem, title :e.target.value})} value={IncomeItem.title} />
    </div>
    <div className='new-income__control'>
        <label>Amount</label>
        <input type="number" min ="0.01" step="0.01" onChange={(e)=>SetIncomeItem({...IncomeItem,amount :e.target.value})} value={IncomeItem.amount}/>
    </div>
    <div className='new-income__control'>
        <label>Date</label>
        <input type="Date" min="2019-01-01" max="2023-12-31" onChange={(e)=>SetIncomeItem({...IncomeItem,date :e.target.value})} value={IncomeItem.date} />
    </div>
</div>
<div className='new-income__actions'> 
<button type="button" onClick={props?.onCancel}>cancel</button>
 <button type="submit" >Add Expense</button>
</div>
</form>
  )
}

export default IncomeForm