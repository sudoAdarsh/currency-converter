import { popularCurrencies } from "../utils/popularCurrencies";

export function PopularCurrencies({ setToCurrency }) {
  return (
    <section className="flex flex-col sm:gap-16 gap-12 sm:mt-12 mt-6 px-6">
      <h2 className="text-2xl font-semibold tracking-tight">
        Popular Currencies
      </h2>
      <div className="grid sm:grid-cols-4 grid-cols-2 sm:gap-16 gap-x-12 gap-y-8 sm:px-8 px-2">
        {popularCurrencies.map((cur, i) => (
          <button
            key={i}
            className="text-xl text-center bg-olive-300 p-3 rounded-3xl cursor-pointer hover:bg-olive-400"
            onClick={() => setToCurrency(cur)}
          >
            {cur.code}
          </button>
        ))}
      </div>
    </section>
  );
}
