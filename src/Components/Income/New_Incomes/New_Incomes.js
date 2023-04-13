import React, { useState } from 'react' ;
import IncomeForm from '../IncomeForm/IncomeForm';
import './New_Incomes.css';

const New_Incomes = (props) => {
  
  const [editing,setEditing] = useState(false);

    const startEditingHandler = ()=>{
        setEditing(true);
       
      };
  
      const StopEditingHandler = ()=>{
        setEditing(false);
      };

      
      const saveIncomeDataHandler = (enteredIncomeData)=>{
        const IncomeData = {
            ...enteredIncomeData,
            id: Math.random().toString()
        };
        props.onAddIncome(IncomeData);
            setEditing(false);
      };
  return (
    <div className='new-income'>
        {!editing && <button onClick={startEditingHandler}>Add New Income</button>}
        {editing && <IncomeForm onSaveIncomeData = {saveIncomeDataHandler} onCancel = {StopEditingHandler} />}

    </div>
  )
}

export default New_Incomes;