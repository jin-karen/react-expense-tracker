import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
	const expenses = [
		{
			id: 'e1',
			title: 'Rent', 
			amount: 1175.00, 
			date: new Date(2023,5,1)
		},
		{
			id: 'e2',
			title: 'Food Delivery', 
			amount: 42.63, 
			date: new Date(2023,5,6)
		},
		{
			id: 'e3',
			title: 'Drinks', 
			amount: 15.32, 
			date: new Date(2023,5,8)
		},
		{
			id: 'e4',
			title: 'Groceries', 
			amount: 294.67, 
			date: new Date(2023,5,11),
		},
	];
	function addExpenseHandler(expense){
		console.log('In App.js');
		console.log(expense);
	}
	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses expenses={expenses}/>
		</div>
	);
}

export default App;
