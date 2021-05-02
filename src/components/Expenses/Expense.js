import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expense.css';

const Expense = (props) => {
  const expenseItems = []

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

  return (
    <div>
      <h2>Let's get started</h2>

      <Card className="expenses">
        {expenseItems}
      </Card>
    </div>
  );
}

export default Expense;