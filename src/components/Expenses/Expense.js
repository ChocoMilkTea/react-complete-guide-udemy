import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expense.css';

function Expense(props) {
  const expenseItems = []

  for (const [index, key] of props.expenses.entries()) {
    expenseItems.push(
      <ExpenseItem
        title={key.title}
        amount={key.amount}
        date={key.date}
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