import { convertCurrency } from "../utils/convertCurrency";

export function ActionPanel({
  setFromCurrency,
  setToCurrency,
  fromCurrency,
  toCurrency,
  amount,
  setOutput,
}) {
  return (
    <div className="flex flex-1 flex-col justify-around items-center w-full">
      <button
        className="text-3xl bg-olive-300 rounded-full w-14 h-12 hover:bg-olive-400 cursor-pointer"
        onClick={() => {
          setFromCurrency(toCurrency);
          setToCurrency(fromCurrency);
        }}
      >
        ⇄
      </button>
    </div>
  );
}
