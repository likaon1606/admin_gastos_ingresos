import { useGlobalState } from '../context/GlobalState';

const Balance = () => {
  const data = useGlobalState();

  return (
    <div>
      Balance
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};

export default Balance;
