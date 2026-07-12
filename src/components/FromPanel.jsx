import { CurrencySearch } from "./CurrencySearch";

export function FromPanel({
  displayValue,
  onSelectCurrency,
  amount,
  setAmount,
}) {
  return (
    <div className="flex flex-2 flex-col gap-8 py-4">
      <CurrencySearch
        onSelectCurrency={onSelectCurrency}
        placeholder="From Currency"
        value={displayValue}
      />
      <input
        className="w-full rounded-lg border border-olive-400 bg-olive-200 px-3 py-2 text-xl font-semibold placeholder:text-olive-600 focus:border-olive-900 focus:ring-2 focus:ring-olive-900/20 outline-none transition"
        placeholder="Amount"
        type="text"
        inputMode="numeric"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
    </div>
  );
}
