import Expenses from "./Components/Expenses/Expenses";
import React, { useState } from "react";
import NewExpense from "./Components/NewExpense/NewExpense";
const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Car insurence",
    amoutn: 300.64,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e2",
    title: "toilet paper",
    amoutn: 150.51,
    date: new Date(2021, 1, 11),
  },
  { id: "e3", title: "Tv", amoutn: 295.69, date: new Date(2021, 4, 24) },
  { id: "e4", title: "knive", amoutn: 280.65, date: new Date(2021, 12, 15) },
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const edExpenseHangler = (expense) => {
  
    setExpenses((preExpenses) => {
      const check = [expense, ...preExpenses]
    
      // change state depanding on previouse state
      return check;
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={edExpenseHangler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
