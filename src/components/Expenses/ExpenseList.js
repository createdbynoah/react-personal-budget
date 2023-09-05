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

  return (
    <Card className="expenses">
      <ExpensesFilter
        onYearFilterChange={expenseFilterHandler}
        selected={filteredYear}
      />
      {items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default ExpenseList;
