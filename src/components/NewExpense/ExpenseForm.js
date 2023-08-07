import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {
    // multiple states approach
	const [enteredTitle, setEnteredTitle] = useState('');
	function titleChangeHandler(event) {
		setEnteredTitle(event.target.value);
	}
	const [enteredAmount, setEnteredAmount] = useState('');
	function amountChangeHandler(event) {
		setEnteredAmount(event.target.value);
	}
	const [enteredDate, setEnteredDate] = useState('');
	function dateChangeHandler(event) {
		setEnteredDate(event.target.value);
	}
    // single state for multiple inputs
    // const [userInput, setUserInput] = useState ({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });
    // function titleChangeHandler(event) {
    //     // approach 1 - not ideal for state depending on prev state
    //     // setUserInput({
    //     //     ...userInput,
    //     //     enteredTitle: event.target.value,
    //     // });
    //     setUserInput((prevState) => {
    //         return {...prevState, enteredTitle: event.target.value}
    //     });
    // }
    function submitHandler(event) {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        props.onCloseForm();
    };
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input 
                        type="text" 
                        value={enteredTitle}
                        onChange={titleChangeHandler} 
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input 
                        type="number" 
                        min="0.01" 
                        step="0.01" 
                        value={enteredAmount}
                        onChange={amountChangeHandler} 
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input 
                        type="date" 
                        min="2020-01-01" 
                        max="2023-12-31" 
                        value={enteredDate}
                        onChange={dateChangeHandler} 
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCloseForm}>Close Form</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;