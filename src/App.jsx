import { use, useEffect, useState } from "react";
import { CurrencySearch } from "./components/CurrencySearch";
import { Header } from "./components/Header";
import { PopularCurrencies } from "./components/PopularCurrencies";
import { FromPanel } from "./components/FromPanel";
import { ToPanel } from "./components/ToPanel";
import { ActionPanel } from "./components/ActionPanel";
import { convertCurrency, loadRates } from "./utils/convertCurrency";

function App() {
  const [fromCurrency, setFromCurrency] = useState("from");
  const [toCurrency, setToCurrency] = useState("to");
  const [amount, setAmount] = useState("");
  const [output, setOutput] = useState("");
  const [rates, setRates] = useState(null);

  useEffect(() => {
    async function initialize() {
      const rates = await loadRates();
      setRates(rates);
    }
    initialize();
  }, []);

  useEffect(() => {
    if (!rates) return;
    if (!amount) return;
    if (!fromCurrency?.code) return;
    if (!toCurrency?.code) return;
    setOutput(
      convertCurrency(fromCurrency?.code, toCurrency?.code, amount, rates),
    );
  }, [rates, amount, fromCurrency, toCurrency]);

  return (
    <div className="min-h-screen bg-olive-100 flex flex-col items-center sm:gap-16 gap-2">
      <Header />
      <div className="flex flex-col w-full max-w-5xl sm:mt-12 mt-2 sm:gap-12 gap-6">
        <main className="flex md:flex-row flex-col sm:justify-between px-6 sm:mb-12 mb-6">
          <FromPanel
            onSelectCurrency={setFromCurrency}
            displayValue={fromCurrency?.name}
            amount={amount}
            setAmount={setAmount}
          />
          {/* Actions */}
          <ActionPanel
            setFromCurrency={setFromCurrency}
            setToCurrency={setToCurrency}
            fromCurrency={fromCurrency}
            toCurrency={toCurrency}
            amount={amount}
            setOutput={setOutput}
          />
          <ToPanel
            onSelectCurrency={setToCurrency}
            displayValue={toCurrency?.name}
            output={output}
          />
        </main>
        <PopularCurrencies setToCurrency={setToCurrency} />
      </div>
    </div>
  );
}

export default App;
