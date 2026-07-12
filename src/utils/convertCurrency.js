import testData from "../assets/testData.json";

export async function loadRates() {
  const cached = localStorage.getItem("exchange_data");
  if (cached) {
    try {
      const data = JSON.parse(cached);
      const now = Math.floor(Date.now() / 1000);
      if (data && data.time_next_update_unix > now) {
        return data.conversion_rates;
      }
    } catch {
      localStorage.removeItem("exchange_data");
    }
  }

  const response = await fetch(
    "https://v6.exchangerate-api.com/v6/4dee1d18e33acf01991a3c7e/latest/USD",
  );
  const freshData = await response.json();
  localStorage.setItem("exchange_data", JSON.stringify(freshData));

  return testData.conversion_rates;
}

export const convertCurrency = (from, to, amount, rates) => {
  const TO = rates[to];
  const FROM = rates[from];
  const rate = TO / FROM;

  return (+amount * rate).toFixed(2);
};
