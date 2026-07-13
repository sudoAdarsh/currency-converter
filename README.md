# 💱 Currency Converter

A modern, responsive currency converter built with **React** and **Tailwind CSS** that provides live exchange rates while remaining completely free to host.

Instead of relying on a traditional backend server, this project uses **GitHub Actions** to fetch exchange rates once per day and update a static `data.json` file, allowing the frontend to serve fresh data directly from GitHub Pages.

🔗 **Live Demo:** https://sudoadarsh.github.io/currency-converter/

---

## Features

- 🌍 Search over 160+ world currencies
- 🎯 Smart search ranking (code, country, and currency name)
- ⌨️ Full keyboard navigation
  - Arrow key navigation
  - Enter to select
  - Escape to close
  - Tab support
- 📱 Responsive layout for desktop and mobile
- 🔄 Instant conversion (no Convert button required)
- 💾 LocalStorage caching to avoid unnecessary downloads
- ⚡ Automatic daily exchange rate updates
- 🚀 Fully static deployment on GitHub Pages

---

## Tech Stack

### Frontend

- React
- Tailwind CSS
- Vite

### Automation

- GitHub Actions
- Python
- ExchangeRate API

### Hosting

- GitHub Pages

---

## Project Structure

```
src
├── assets
├── components
│   ├── ActionPanel.jsx
│   ├── CurrencySearch.jsx
│   ├── FromPanel.jsx
│   ├── Header.jsx
│   ├── PopularCurrencies.jsx
│   └── ToPanel.jsx
├── utils
│   ├── convertCurrency.js
│   ├── loadRates.js
│   ├── popularCurrencies.js
│   └── showRecommendations.js
├── App.jsx
└── main.jsx
```

The project follows a component-based architecture where UI, business logic, and utility functions are separated to keep components small and maintainable.

---

## How It Works

### Exchange Rate Updates

A GitHub Action runs every day at **00:05 UTC**.

The workflow:

1. Fetches the latest exchange rates from ExchangeRate API.
2. Updates `public/data.json`.
3. Commits the updated file.
4. GitHub Pages automatically serves the latest data.

This approach removes the need for a continuously running backend while keeping exchange rates up to date.

---

### Client-side Caching

When the application starts:

- Cached exchange rates are checked in LocalStorage.
- If the cache is still valid, it is reused.
- Otherwise, the latest `data.json` is loaded and cached.

This minimizes unnecessary downloads and keeps the application fast.

---

## Running Locally

Clone the repository:

```bash
git clone https://github.com/sudoAdarsh/currency-converter.git
cd currency-converter
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

## GitHub Action

The repository includes a scheduled workflow that automatically refreshes exchange rates every day.

For local testing, run:

```bash
python scripts/update_rates.py
```

---

## What I Learned

This project was my first complete React application and taught me much more than simply building a UI.

Some of the concepts explored include:

- React component architecture
- State management using hooks
- Building reusable components
- Keyboard accessibility
- Responsive design with Tailwind CSS
- Search ranking algorithms
- LocalStorage caching
- Separation of UI and business logic
- GitHub Pages deployment
- GitHub Actions automation
- Managing secrets securely
- CI/CD fundamentals

---

## Future Improvements

- Better accessibility (ARIA support)
- Improved keyboard focus management
- Search input debouncing
- Historical exchange rate support
- Offline-first support with a Service Worker

---

## License

This project is licensed under the MIT License.
