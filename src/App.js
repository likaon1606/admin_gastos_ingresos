import './App.css';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionForm from './components/transactions/TransactionForm';
import TransactionList from './components/transactions/TransactionList';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <div className='App'>
      <GlobalProvider>
        <Header />
        <IncomeExpenses />
        <Balance />
        <TransactionForm />
        <TransactionList />
      </GlobalProvider>
    </div>
  );
}

export default App;
