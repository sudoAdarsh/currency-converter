import { countryCodes } from "../assets/countryCodes";

const popular = ["USD", "EUR", "INR", "GBP", "JPY", "CAD", "AUD", "AED"];

export const popularCurrencies = popular.map((code) =>
  countryCodes.find((c) => c.code === code),
);
