import React, { useEffect, useState } from 'react'
import './IncomePage.css';
import axios from "axios";
import New_Incomes from './New_Incomes/New_Incomes';
import Incomes from './Incomes/Incomes';


const IncomePage = () => {

  const [previousData, SetPreviousdata] = useState([]);

  let loadData = async ()=>{
   
    let users = await axios.get('http://localhost:3005/items');
    console.log(users);
  
    SetPreviousdata(users.data)
       
  };
  useEffect(()=>{
    loadData();
  },[]);

  const [incomes,SetIncomes] = useState(previousData);
  const addIncomeHandler = (expense)=>{
    SetIncomes([expense,...incomes]);
 };
 console.log(previousData);
  return (
    <div>
         <div className='Income-heading'>
           <h2>Income List </h2>
             </div>
        
      <New_Incomes   onAddIncome = {addIncomeHandler}  />
       
    <Incomes   previousData ={previousData}/>
      


    </div>
  )
}

export default IncomePage;