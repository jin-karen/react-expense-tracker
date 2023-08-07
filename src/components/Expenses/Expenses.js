import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2023');
    function filterChangeHandler(selectedYear){
        setFilteredYear(selectedYear);
        console.log(selectedYear);
    };
    const filteredExpenses = props.expenses.filter((expense) => expense.date.getFullYear().toString() === filteredYear);

    return (
        <Card className="expenses">
            <ExpensesFilter 
                selected={filteredYear} 
                onFilterYear={filterChangeHandler} 
            />
            <ExpensesChart filteredExpenses={filteredExpenses} />
            <ExpensesList filteredExpenses={filteredExpenses} /> 
        </Card>
    );
}

export default Expenses;