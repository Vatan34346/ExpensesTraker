import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpensesChar";

function Expenses(props) {
  const [filter, setFilter] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilter(selectedYear);
    console.log(selectedYear);
  };

  const filterdExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filter;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filter} onChangeFilter={filterChangeHandler} />
        <ExpenseChart expenses={filterdExpenses}/>
        <ExpensesList items={filterdExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
