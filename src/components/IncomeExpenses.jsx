import { useGlobalState } from '../context/GlobalState';

const IncomeExpenses = () => {
  const { transactions } = useGlobalState();

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense =
    amounts
      .filter((item) => item < 0)
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2) * -1;

  return (
    <>
      <div className='flex justify-between my-2'>
        <h4>INGRESOS</h4>
        <p>{income}</p>
      </div>
      <div className='flex justify-between my-2'>
        <h4>EGRESOS</h4>
        <h4>{expense}</h4>
      </div>
    </>
  );
};

export default IncomeExpenses;
