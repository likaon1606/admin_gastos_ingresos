import './App.css';
import Balance from './components/Balance';
import Header from './components/Header';
import TransactionForm from './components/TransactionForm';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <div className='App'>
      <GlobalProvider>
        <Header />
        <Balance />
        <TransactionForm />
        <h1>hello</h1>
      </GlobalProvider>
    </div>
  );
}

export default App;
