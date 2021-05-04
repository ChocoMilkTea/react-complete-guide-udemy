import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  // const expenseItems = []
  const [filteredYear, setFilteredYear] = useState('2020');

  // for (const [index, key] of props.items.entries()) {
  //   expenseItems.push(
  //     <ExpenseItem
  //       title={key.title}
  //       amount={key.amount}
  //       date={key.date}
  //       key={index}
  //     />
  //   )
  // }

  const onChangeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={onChangeFilterHandler} />
        {/* {expenseItems} */}
        {filteredExpenses.map((expense, index) => (
          <ExpenseItem
            key={index}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))};
      </Card>
    </div>
  );
}

export default Expenses;