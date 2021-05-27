import React,{useState} from 'react'// define value as state

import "./ExpenseItem.css";
import ExpanseDate from "./ExpanseDate";
import Card from '../UI/Card'

function ExpenseItem(props) {
  // props-object of props from app component(tag attribiuts)


// const [title,setTitle]= useState(props.title);//dtate return array  1 elemnat initial state , 2-changer function 


  // const clickHamdler = ()=>{
  //       setTitle('updated');
  // }
  return (
    <li>
    <Card className="expense-item">
      <ExpanseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
<button /*onClick={clickHamdler}*/>Change</button>
    </Card>
    </li>
  );
}

export default ExpenseItem;
