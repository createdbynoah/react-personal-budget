import React, { useState } from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const hideFormHander = () => {
    setShowForm(false);
  };

  const showFormHandler = () => {
    setShowForm(true);
  };

  return (
    <div className="new-expense">
      {showForm ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={hideFormHander}
        />
      ) : (
        <button onClick={showFormHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
