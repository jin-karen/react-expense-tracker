import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2023');
    function filterChangeHandler(selectedYear){
        setFilteredYear(selectedYear);
        console.log(selectedYear);
    };
    const filteredExpenses = props.expenses.filter((expense) => expense.date.getFullYear() == filteredYear);
    
    let expensesContent = <p>No expenses found.</p>
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
                selected={filteredYear} 
                onFilterYear={filterChangeHandler} 
            />
            {expensesContent}
        </Card>
    );
}

export default Expenses;