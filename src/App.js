import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  { title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 8, 14) },
  { title: 'New TV', amount: 799.49, date: new Date(2021, 3, 12) },
  { title: 'Car Insurance', amount: 294.67, date: new Date(2021, 3, 28) },
  { title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 6, 12) }
]

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
