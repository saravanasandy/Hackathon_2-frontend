import React from 'react'
import './IncomesList.css';
import IncomesItem from '../IncomesItem/IncomesItem';

const IncomesList = (props) => {
    if(props.filteredIncomes.length === 0){
        return <h2 className='income-list__fallback'>Found no expenses.</h2>;
    }
  return (<ul className='income-list'>
  {
       props.filteredIncomes.map((value, index) => {
          return  <IncomesItem
                   key={index}
                   id = {value._id}
                   title={value.title}
                   amount={value.amount}
                   date={value.date}
                  />
            
         
        })
  }
</ul>)
}

export default IncomesList