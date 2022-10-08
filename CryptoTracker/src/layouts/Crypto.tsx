import { useAppSelector, useAppDispatch } from "../hooks/reduxHooks";
import { changeCurrency } from "../features/slices/cryptoSlice";
import { useGetBitcoinDataQuery } from "../features/api/cryptoApi";
import { INTERVAL_TIME } from "../config/intervalTime";

const Crypto = () => {
  const { currency } = useAppSelector((state) => state.crypto);
  const dispatch = useAppDispatch();

  const { data, isLoading, error } = useGetBitcoinDataQuery(undefined, {
    pollingInterval: INTERVAL_TIME,
  });

  const handleCurrencySelection = (e: any) =>
    dispatch(changeCurrency(e.currentTarget.value));

  if (isLoading) return <div>Loading ...</div>;
  if (error) return <div>Something went horrible wrong ...</div>;

  return (
    <div>
      <h1>Bitcoin Price</h1>
      <select value={currency} onChange={handleCurrencySelection}>
        {data &&
          Object.keys(data).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
      </select>
      <div>
        <h2>
          <span>{data && data[currency].symbol}</span>
          <span> {data && data[currency].last}</span>
        </h2>
      </div>
    </div>
  );
};

export default Crypto;
