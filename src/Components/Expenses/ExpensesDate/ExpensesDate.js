import React from 'react'
import './ExpensesDate.css';

const ExpensesDate = (props) => {
  // console.log(props.date);
     
  var day = new Date(props.date);
  var findDay = JSON.stringify(day).slice(9,11);
  // console.log(findDay);



  var month = new Date(props.date);
  var findMonth = month.toLocaleString("en-US", {month:"long"});
  // console.log(findMonth);



  var year = new Date(props.date);
  var findYear = JSON.stringify(year).slice(1,5);
  // console.log(findYear);

// const month = props.date.toLocaleString("en-US", {month:"long"})
// const date = props.date.toLocaleString("en-US", {day: "numeric"})
// const year = props.date.getFullYear();
  return (
    <div className="expense-date">
    <div className="expense-date__month">{findMonth}</div>
    <div className="expense-date__year">{findYear}</div>
    <div className="expense-date__day">{findDay}</div>
    </div>
  )
}

export default ExpensesDate;