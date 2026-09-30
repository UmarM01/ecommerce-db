# 🛒 E-Commerce Dashboard & Storefront

A responsive and modern React-based E-Commerce web application built with dynamic state management, catalog browsing, persistent cart capabilities, checkout workflows, and developer debugging tools.

---

## 🚀 Features

- **🏠 Interactive Home & Landing**: Welcome hero section with quick navigation to featured products and promotions.
- **📦 Product Catalog**: Grid layout of products with real-time stock status, pricing, ratings, and responsive image previews.
- **🛍️ Cart Management**:
  - Add to cart with quantity increments.
  - Persistent state saved to `localStorage`.
  - Item quantity modification & item removal.
  - Dynamic order subtotal and item counter in header.
- **💳 Checkout Flow**: Complete order placement form with customer input validation and instant order confirmation tracking.
- **👤 Mock Authentication**: Seamless toggle between guest mode and logged-in user profile.
- **🛡️ Error Handling**: React Error Boundaries and localized alert banners for network/order resilience.
- **🛠️ Debug Panel**: Built-in developer telemetry panel displaying active page status, cart counter, and error states.

---

## 🛠️ Tech Stack

- **Frontend**: [React 19](https://react.dev/)
- **Styling**: [Bootstrap 5](https://getbootstrap.com/), Vanilla CSS, [Radium](https://github.com/FormidableLabs/radium)
- **Routing**: [React Router](https://reactrouter.com/)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Testing**: React Testing Library & Jest

---

## 📂 Project Structure

```text
ecommerce-dashboard/
├── public/                # Static assets & HTML template
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Header.js
│   │   ├── Navigation.js
│   │   ├── ProductCard.js
│   │   ├── ProductList.js
│   │   ├── Cart.js
│   │   ├── CartItem.js
│   │   ├── CheckoutForm.js
│   │   ├── DebugPanel.js
│   │   └── ErrorBoundary.js
│   ├── pages/             # Page views
│   │   ├── Home.js
│   │   ├── Products.js
│   │   ├── Cart.js
│   │   └── Checkout.js
│   ├── styles/            # Custom styling & themes
│   ├── utils/             # API mocks & helper functions
│   ├── App.js             # Root application orchestrator
│   └── index.js           # Entry point
├── package.json
└── README.md
```

---

## 🏁 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 16.x or newer recommended)
- `npm` or `yarn`

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/UmarM01/ecommerce-db.git
   cd ecommerce-db
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

---

## 🧪 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm start` | Runs the app in development mode with live reload. |
| `npm test` | Launches the test runner in interactive watch mode. |
| `npm run build` | Bundles the app for production in the `build/` folder. |
| `npm run eject` | Ejects Create React App configuration (one-way operation). |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
