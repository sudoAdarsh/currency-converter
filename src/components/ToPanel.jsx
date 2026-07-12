import { CurrencySearch } from "./CurrencySearch";

export function ToPanel({ displayValue, onSelectCurrency, output }) {
  return (
    <div className="flex flex-2 flex-col gap-8 py-4">
      <CurrencySearch
        onSelectCurrency={onSelectCurrency}
        placeholder="To Currency"
        value={displayValue}
      />
      <input
        className="w-full rounded-lg border border-olive-300 bg-olive-300 px-3 py-2 text-xl font-semibold text-olive-900 cursor-default select-all"
        type="text"
        placeholder="Converted Amount"
        readOnly
        value={output}
      />
    </div>
  );
}
