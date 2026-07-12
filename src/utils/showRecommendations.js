export const showRecommendations = (currencies, query) => {
  query = query.toLowerCase();

  const result = currencies
    .map((currency) => {
      let score = 0;
      if (currency.code.toLowerCase() === query) score += 100;
      if (currency.country.toLowerCase() === query) score += 90;
      if (currency.name.toLowerCase() === query) score += 80;

      if (currency.code.toLowerCase().includes(query)) score += 20;
      if (currency.country.toLowerCase().includes(query)) score += 10;
      if (currency.name.toLowerCase().includes(query)) score += 5;
      return { ...currency, score };
    })
    .filter((c) => c.score > 0)
    .sort((a, b) => b.score - a.score);
  return result;
};
