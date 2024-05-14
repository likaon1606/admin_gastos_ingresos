import './App.css';
import Balance from './components/Balance';
import Header from './components/Header';
import TransactionForm from './components/transactions/TransactionForm';
import TransactionList from './components/transactions/TransactionList';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <div className='App'>
      <GlobalProvider>
        <Header />
        <Balance />
        <TransactionForm />
        <TransactionList />
        <h1>hello</h1>
      </GlobalProvider>
    </div>
  );
}

export default App;
