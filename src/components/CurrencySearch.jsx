import { useEffect, useRef, useState } from "react";
import { countryCodes } from "../assets/countryCodes";
import { showRecommendations } from "../utils/showRecommendations";

export function CurrencySearch({ onSelectCurrency, placeholder, value }) {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const suggestions = showRecommendations(countryCodes, search);
  const liRef = useRef(null);
  const dropDownRef = useRef(null);

  useEffect(() => setSearch(value ? value : ""), [value]);

  useEffect(() => {
    const handleClickOutSide = (event) => {
      if (!dropDownRef.current.contains(event.target)) setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutSide);

    return () => document.removeEventListener("mousedown", handleClickOutSide);
  }, []);

  useEffect(() => liRef.current?.scrollIntoView(), [activeIndex]);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setActiveIndex((prev) => (prev < suggestions.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : suggestions.length - 1));
    } else if (e.key === "Enter") {
      if (activeIndex >= 0 && suggestions[activeIndex]) {
        handleSelect(suggestions[activeIndex]);
      }
    } else if (e.key === "Escape") {
      setIsOpen(false);
    } else if (e.key === "Tab") {
      if (activeIndex >= 0 && suggestions[activeIndex])
        handleSelect(suggestions[activeIndex]);
      else if (activeIndex === -1 && suggestions) handleSelect(suggestions[0]);
    }
  };

  const handleSelect = (currency) => {
    setSearch(currency.code);
    onSelectCurrency(currency);
    setIsOpen(false);
    setActiveIndex(-1);
  };
  return (
    <div ref={dropDownRef} className="w-full md:max-w-sm relative">
      <input
        className="border border-olive-800 bg-olive-200 placeholder:text-olive-600 text-olive-900 rounded-lg px-3 py-2 text-xl w-full focus:border-olive-900 focus:ring-2 focus:ring-olive-900/20"
        placeholder={placeholder}
        type="text"
        value={search}
        onKeyDown={handleKeyDown}
        onChange={(e) => {
          const input = e.target.value;
          setSearch(input);
          setIsOpen(true);
          setActiveIndex(-1);
        }}
      />
      {isOpen && suggestions.length > 0 && (
        <ul className="absolute z-10 bg-olive-200 mt-2 w-full sm:max-w-sm max-h-72 overflow-y-auto rounded-xl border border-olive-400 shadow-2xl">
          {suggestions.map((currency, index) => (
            <li
              ref={index === activeIndex ? liRef : null}
              key={currency.code}
              className={`cursor-pointer px-4 py-3 ${index === activeIndex ? "bg-olive-300" : "hover:bg-olive-400"}`}
              onClick={() => {
                setSearch(currency.name);
                onSelectCurrency(currency);
                setIsOpen(false);
              }}
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-olive-900">
                  {currency.code}
                </span>
                <span className="text-sm text-olive-700">
                  {currency.country}
                </span>
              </div>
              <p className="mt-1 text-sm text-olive-800">{currency.name}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
