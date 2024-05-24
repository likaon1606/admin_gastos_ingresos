import React, { useState, useEffect } from 'react';
import { VictoryPie, VictoryLabel } from 'victory';
import { useGlobalState } from '../context/GlobalState';

const ExpenseChart = () => {
  const { transactions } = useGlobalState();
  const [totalExpensesPercentage, setTotalExpensesPercentage] = useState(0);
  const [totalIncomePercentage, setTotalIncomePercentage] = useState(100);

  useEffect(() => {
    // Calcula el total de ingresos y gastos
    const totalIncome = transactions
      .filter((transaction) => transaction.amount > 0)
      .reduce((acc, transaction) => (acc += transaction.amount), 0);

    const totalExpense =
      transactions
        .filter((transaction) => transaction.amount < 0)
        .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;

    // Calcula el porcentaje de gastos e ingresos
    const totalExpensesPercentage = Math.round(
      (totalExpense / (totalIncome + totalExpense)) * 100
    );

    const totalIncomePercentage = 100 - totalExpensesPercentage;

    // Actualiza los estados locales con los nuevos porcentajes
    setTotalExpensesPercentage(totalExpensesPercentage);
    setTotalIncomePercentage(totalIncomePercentage);
  }, [transactions]);

  return (
    <VictoryPie
      colorScale={['#e74c13', '#2ecc71']}
      data={[
        { x: 'Expenses', y: totalExpensesPercentage },
        { x: 'Incomes', y: totalIncomePercentage },
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
