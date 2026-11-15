# INVESTLAB — Institutional Investment Simulation Platform

INVESTLAB is a high-density, dual-market investment education and stock market simulation platform. It bridges the gap between passive financial reading and practical execution through active risk confrontation and automated behavioral feedback.

---

## Key Platform Features

- **Dual-Market Architecture**:
  - **India**: National Stock Exchange (NSE) & Bombay Stock Exchange (BSE) priced in Indian Rupees (INR ₹) with standard Indian numbering (Lakhs and Crores). Starting virtual capital: **₹10,00,000**.
  - **United States**: NASDAQ & New York Stock Exchange (NYSE) priced in US Dollars (USD $) with western currency formatting. Starting virtual capital: **$10,000**.
- **Interactive Multi-Timeframe Charting**:
  - Pure SVG candlestick and area charts.
  - Multi-interval selection: 1D, 1W, 1M, 1Y, 5Y, and ALL.
  - Interactive crosshairs with live OHLCV price inspection and volume histograms.
- **The Consequence Engine™**:
  - Real-time concentration risk auditing (normalized Herfindahl-Hirschman Index).
  - Covariance and sector over-weighting diagnostics.
  - Cash drag vs liquidity exhaustion warnings.
  - Behavioral bias alerts targeting loss-aversion panic selling and FOMO entries.
- **Interactive Stress-Tester**:
  - Simulate macroeconomic shocks (-12% systemic market crash, -22% tech sector liquidation, rate hike shocks) against live portfolio holdings.
- **Order Execution Engine**:
  - Weighted-average cost basis calculations.
  - Balance protection guards preventing spending unowned cash or shorting without shares.
  - Audit ledger tracking chronological buy and sell transactions with realized profit/loss.
  - LocalStorage persistence preserving portfolio state across browser sessions.

---

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Library**: React 18
- **Language**: TypeScript (Strict typing)
- **Styling**: Tailwind CSS (Custom institutional terminal theme)
- **Icons**: Lucide React
- **CI/CD**: GitHub Actions

---

## Local Development Setup

### Prerequisites
- Node.js 18.18+ or 20+
- npm, pnpm, or yarn

### Installation Steps

1. Clone or copy the repository files:
   ```bash
   git clone https://github.com/<your-username>/investlab.git
   cd investlab
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. Run the production build:
   ```bash
   npm run build
   npm start
   ```

---

## Deployment Guide

### Deploying to Vercel (Recommended)

1. Push this repository to your GitHub account.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your `investlab` repository.
4. Vercel automatically detects Next.js. Leave the default build settings:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`
5. Click **"Deploy"**. Your live platform URL will be ready in under a minute.

### Deploying to Netlify

1. Sign in to [Netlify](https://www.netlify.com).
2. Click **"Add new site"** > **"Import an existing project"**.
3. Select GitHub and choose your `investlab` repository.
4. The included `netlify.toml` automatically configures the Next.js runtime plugin and build output.
5. Click **"Deploy site"**.

---

## Project Structure

```
├── .github/workflows/ci.yml       # Automated GitHub Actions build verification
├── src/
│   ├── app/
│   │   ├── globals.css            # Financial terminal theme and animations
│   │   ├── layout.tsx             # Root layout with PortfolioProvider
│   │   └── page.tsx               # Main multi-view navigation controller
│   ├── components/
│   │   ├── layout/                # Navbar, MarketTicker, Footer
│   │   ├── landing/               # Hero, ValueProps, ConsequenceEngine, Curriculum, CTA
│   │   ├── dashboard/             # PortfolioMetrics, HoldingsTable, AllocationChart, Ledger
│   │   └── terminal/              # StockSearch, InteractiveChart, DetailsCard, OrderTicket
│   ├── context/                   # PortfolioContext state and storage logic
│   ├── data/                      # Indian and US stock datasets and index benchmarks
│   └── lib/                       # Financial calculations, formatters, and learning engine
├── netlify.toml                   # Netlify configuration
├── vercel.json                    # Vercel configuration
└── tailwind.config.js             # Institutional color palette definitions
```

---

## Educational Notice

INVESTLAB is an educational simulation. All financial figures, securities transactions, and account balances are strictly virtual. No real capital is deposited or transacted.
