# Paradise Nursery

Paradise Nursery is a responsive plant shop built with React. Browse a curated
collection of houseplants, add plants to a Redux-powered cart, adjust quantities,
and complete a sample checkout.

## Key features

- Responsive landing page, plant catalog, company story, and shopping cart.
- Products organized into plant-care categories.
- Redux Toolkit cart with duplicate-aware add, quantity updates, and removal.
- Live item count, line subtotals, and order total.
- Sample checkout confirmation that clears the cart after the order is placed.

## Technologies

- React 18 and Vite
- Redux Toolkit and React Redux
- React Router
- CSS

## Install

Install Node.js (version 18 or newer), then from the project directory run:

```bash
npm install
```

## Run locally

Start the development server:

```bash
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`).

Create a production build with:

```bash
npm run build
```

Plant and hero photography is loaded from Unsplash image URLs, so an internet
connection is needed to display those images.
