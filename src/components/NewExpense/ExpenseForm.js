import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  // Individual State
  // const [enteredTitle, setEnteredTitle] = useState('');
  // const [enteredAmount, setEnteredAmount] = useState('');
  // const [enteredDate, setEnteredDate] = useState('2019-01-01');

  // Combined State
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''
  });

  const titleChangeHandler = (event) => {
    // Individual State
    // setEnteredTitle(event.target.value);

    // Update state for combined state
    // Copy userInput key value pair and update
    // Overwrite enteredTitle value
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value
    // })

    // Another better combined state
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value }
    });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)
  };

  return (
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' onChange={amountChangeHandler} min="0.01" step="0.01" />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' onChange={dateChangeHandler} min="2019-01-01" max="2022-12-31" />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button>Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;