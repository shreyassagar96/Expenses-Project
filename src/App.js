import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Rukhvat",
    amount: 24000,
    date: new Date(2023, 2, 7),
  },

  {
    id: "e2",
    title: "Home Color",
    amount: 30000,
    date: new Date(2024, 1, 2),
  },

  {
    id: "e3",
    title: "Small Temple",
    amount: 4000,
    date: new Date(2022, 1, 12),
  },

  {
    id: "e4",
    title: "Car Insurance",
    amount: 7000,
    date: new Date(2024, 1, 7),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  
  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
};

export default App;
