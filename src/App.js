import Expense from './components/Expenses/Expense';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const expenses = [
    { title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 8, 14) },
    { title: 'New TV', amount: 799.49, date: new Date(2021, 3, 12) },
    { title: 'Car Insurance', amount: 294.67, date: new Date(2021, 3, 28) },
    { title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 6, 12) }
  ]

  return (
    <div>
      <NewExpense />
      <Expense expenses={ expenses }/>
    </div>
  );
}

export default App;
