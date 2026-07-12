export async function loadRates() {
  const response = await fetch(`data.json?t=${Date.now()}`);
  const data = await response.json();
  return data.conversion_rates;
}

export const convertCurrency = (from, to, amount, rates) => {
  const TO = rates[to];
  const FROM = rates[from];
  const rate = TO / FROM;

  return (+amount * rate).toFixed(2);
};
