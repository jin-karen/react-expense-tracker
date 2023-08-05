import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
		{
			id: 'e1',
			title: 'Rent', 
			amount: 1175.00, 
			date: new Date(2023,6,1)
		},
		{
			id: 'e2',
			title: 'Food Delivery', 
			amount: 42.63, 
			date: new Date(2023,4,28)
		},
		{
			id: 'e3',
			title: 'Drinks', 
			amount: 15.32, 
			date: new Date(2022,7,8)
		},
		{
			id: 'e4',
			title: 'Groceries', 
			amount: 294.67, 
			date: new Date(2021,3,11),
		},
	];

function App() {
	const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
	function addExpenseHandler(expense){
		setExpenses((prevExpenses) => {
			return [expense, ...prevExpenses];
		});
	};
	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses expenses={expenses}/>
		</div>
	);
}

export default App;
