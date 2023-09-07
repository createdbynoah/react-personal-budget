import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './ExpenseList.css';
import ExpensesFilter from './ExpensesFilter';

const ExpenseList = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const expenseFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        onYearFilterChange={expenseFilterHandler}
        selected={filteredYear}
      />
      {expensesContent}
    </Card>
  );
};

export default ExpenseList;
