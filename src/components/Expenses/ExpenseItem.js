import React, { useState } from 'react';

import Card from '../UI/Card';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate'

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);
    function clickHandler() {
        setTitle('Updated!');
        console.log('ExpenseItem evaluated');
    }
    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
                <button onClick={clickHandler}>Change Title</button>
            </Card>
        </li>
    ); 
}

export default ExpenseItem;