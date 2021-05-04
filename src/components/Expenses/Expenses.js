import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  const expenseItems = []
  const [filteredYear, setFilteredYear] = useState('2020');

  for (const [index, key] of props.expenses.entries()) {
    expenseItems.push(
      <ExpenseItem
        title={key.title}
        amount={key.amount}
        date={key.date}
        key={index}
      />
    )
  }

  const onChangeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={onChangeFilterHandler} />
        {expenseItems}
      </Card>
    </div>
  );
}

export default Expenses;