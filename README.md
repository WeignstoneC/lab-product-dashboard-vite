# Lab: Product Dashboard Manager

## Overview

This project builds a **dynamic React product dashboard** that displays a list
of products, supports filtering by availability, and applies conditional styling
for out-of-stock items.

The dashboard uses:
- React component structure
- CSS Modules styling for `ProductCard`
- Material UI components for buttons and layout
- React state for filtering and product removal
- Jest/React Testing Library for automated component tests

## Project Structure

- `src/main.jsx` - application entry point
- `src/App.jsx` - dashboard root component and filter logic
- `src/components/ProductList.jsx` - renders a list of `ProductCard`
- `src/components/ProductCard.jsx` - renders a single product card
- `src/styles/ProductCard.module.css` - component-specific CSS module

## Setup

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Run tests:

```bash
npm test
```

## Features

- Displays a product dashboard title
- Renders product cards dynamically using iteration
- Applies special styling for out-of-stock products
- Filters products by all, in-stock, and out-of-stock
- Removes products from the dashboard via a Remove button
- Shows a message when no products match the filter

## Notes

- The dashboard initially renders three sample products.
- The tests verify title rendering, conditional styling, and removal behavior.

## Resources

- [React Documentation](https://react.dev)
- [Material UI Documentation](https://mui.com)
- [CSS Modules Documentation](https://github.com/css-modules/css-modules)
- [Jest Documentation](https://jestjs.io/)
- [React Testing Library](https://testing-library.com)
