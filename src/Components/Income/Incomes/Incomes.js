import React, {  useState } from 'react'
import './Incomes.css';
import IncomesFilter from '../IncomesFilter/IncomesFilter';
import IncomesChart from '../IncomesChart/IncomesChart';
import IncomesList from '../IncomesList/IncomesList';


const Incomes = (props) => {
 
  const [filteredYear, SetFilteredYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    SetFilteredYear(selectedYear);
  };
     
    // const date2 = new Date(filteredYear).getFullYear();

  // const result =props.previousData.filter((filteryear)=>{
  //   // return filteryear.date === filteredYear});
  //   return console.log(filteryear.date)});
  //   console.log(filteredYear);
    

    const yearResult2 =props.previousData.filter((value)=>{
           var event = new Date(value.date);
        var event1 = JSON.stringify(event).slice(1,5);
        // console.log(event1);
        console.log(filteredYear);
        // let date = JSON.stringify(event);
      return  event1 === filteredYear ;
      });

      console.log(yearResult2);

     

        //  const filteredIncomes = props.items.filter((income) => {
        //      return income.date.getFullYear().toString() === filteredYear;

        //       });

        //       console.log(filteredIncomes);

  return (
    <div>
        <div className="incomes">
        <IncomesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
            <IncomesChart incomes = {yearResult2}/>

            <IncomesList filteredIncomes = {yearResult2} />
    </div>
    </div>
  )
}

export default Incomes


