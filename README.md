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

