import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  // for one state for everyThing

  // const [userInput, setUserInput] = useState({
  //   title: "",
  //   amount: "",
  //   date: "",
  // });

  const titleChangedHandler = (event) => {
    //event default event handler prop
    setTitle(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   title: event.target.value,
    // });

    // setUserInput((prevState)=>{
    //           return {...prevState,
    //                title: event.target.value}
    // })
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
    // setUserInput((prevState)=>{
    //   return {...prevState,amount:event.target.value}
    // })
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);

    //    userInput((prevState)=>{
    // return {...prevState,data:event.target.value}
    //    });
  };

  const submitHandler = (event) => {
    event.preventDefault(); //stop reaload page

    const expendedDate = {
      title: title,
      amoutn: +amount,
      date: new Date(date),
    };

    props.onSaveExpenseData(expendedDate); //param from NewExpanse component
    setTitle('');
    setAmount('');
    setDate('');
    // console.log(expendedDate);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangedHandler} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={amount}
            type="number"
            min="0.001"
            onChange={amountChangeHandler}
            step="0.01"
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={date}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
      <button type="button" onClick={props.canselEditing}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
