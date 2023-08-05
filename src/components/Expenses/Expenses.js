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
    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onFilterYear={filterChangeHandler} />
            {props.expenses.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title} 
                    amount={expense.amount} 
                    date={expense.date}
                />
            ))}
        </Card>
    );
}

export default Expenses;