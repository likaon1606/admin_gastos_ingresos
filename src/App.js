import './App.css';
import Balance from './components/Balance';
import ExpenseChart from './components/ExpenseChart';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionForm from './components/transactions/TransactionForm';
import TransactionList from './components/transactions/TransactionList';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <div className='App'>
      <GlobalProvider>
        <div className='bg-zinc-900 text-white h-screen flex justify-center items-center'>
          <div className='container mx-auto w-3/6'>
            <div className='bg-zinc-800 p-10 rounded-lg flex gap-x-2'>
              <div>
                <h1 className='text-4x1 font-bold'>Expense Tracker</h1>{' '}
                <IncomeExpenses />
                <Balance />
                <TransactionForm />
              </div>
              <div className='flex flex-col flex-1'>
                <ExpenseChart />
                <TransactionList />
              </div>
            </div>
          </div>
        </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
