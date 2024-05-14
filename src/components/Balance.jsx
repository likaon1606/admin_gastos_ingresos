import { useGlobalState } from '../context/GlobalState';

const Balance = () => {
  const data = useGlobalState();

  return (
    <div>
      Balance
      <div></div>
    </div>
  );
};

export default Balance;
