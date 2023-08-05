import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(props)  {
    const [showForm, setShowForm] = useState(false);
    function openFormHandler() {
        setShowForm(true);
    }
    function closeFormHandler() {
        setShowForm(false);
    }
    let addExpenseDisplay = <button onClick={openFormHandler}>Add Expense</button>;
    if (showForm) {
        addExpenseDisplay = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCloseForm={closeFormHandler} />
    } 

    function saveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }

    return (
        <div className="new-expense">
            {addExpenseDisplay}            
        </div>
    );
};

export default NewExpense;