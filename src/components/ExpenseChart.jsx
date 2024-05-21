import { VictoryPie, VictoryLabel } from 'victory';
import { useGlobalState } from '../context/GlobalState';

const ExpenseChart = () => {
  const { transactions } = useGlobalState();

  const total = transactions.reduce(
    (acc, transaction) => (acc += transaction.amount),
    0
  );

  console.log(total);

  return (
    <VictoryPie
      colorScale={['#e74c13', '#2ecc71']}
      data={[
        { x: 'Expenses', y: '35' },
        { x: 'Incomes', y: '40' },
      ]}
      animate={{
        duration: 200,
      }}
      labels={({ datum }) => `${datum.y}%`}
      labelComponent={
        <VictoryLabel
          angle={45}
          style={{
            fill: 'white',
          }}
        />
      }
    />
  );
};

export default ExpenseChart;
