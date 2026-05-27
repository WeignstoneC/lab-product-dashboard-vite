# Lab: Building a Dynamic Product Dashboard

## Overview

This project builds a **dynamic React product dashboard** that displays a list of products with filtering capabilities and conditional styling for product availability. The dashboard allows users to:

- **View** all products in an organized card layout
- **Filter** products by availability (All, In Stock, Out of Stock)
- **Remove** individual products from the dashboard
- **See** visual distinction between in-stock and out-of-stock items

### Key Technologies

- **React 18** - For component-based UI development
- **Material UI (MUI)** - For professional UI components and layout
- **CSS Modules** - For component-scoped styling
- **Vite** - For fast development server and optimized builds
- **Vitest & React Testing Library** - For component testing

## Project Structure

```
lab-product-dashboard-vite/
├── src/
│   ├── App.jsx                          # Main app component with filter logic
│   ├── components/
│   │   ├── ProductList.jsx              # Container component for product cards
│   │   └── ProductCard.jsx              # Individual product card component
│   ├── styles/
│   │   └── ProductCard.module.css       # Component-specific CSS Module styling
│   ├── __tests__/
│   │   ├── indexTest.test.jsx           # Test suite for all components
│   │   └── setup.js                     # Test environment setup
│   ├── main.jsx                         # React DOM render entry point
│   ├── App.css                          # Global App styles
│   └── index.css                        # Global styles
├── public/
├── index.html                           # HTML entry point with root div
├── package.json                         # Project dependencies and scripts
├── vite.config.js                       # Vite configuration
└── jest.config.js                       # Jest/Vitest configuration
```

## Component Architecture

### App Component (`src/App.jsx`)
**Responsibilities:**
- Manages product state and filter state
- Implements filtering logic (All/In Stock/Out of Stock)
- Provides product removal functionality
- Renders filter buttons and ProductList component

**Key Features:**
- `initialProducts` - Sample product data
- `filteredProducts` - Computed products based on active filter
- `handleRemove()` - Removes product by id from state
- Filter buttons with active state visualization

### ProductList Component (`src/components/ProductList.jsx`)
**Responsibilities:**
- Iterates over products array using `.map()`
- Renders ProductCard component for each product
- Implements conditional rendering for empty state
- Uses React fragments to group elements cleanly

**Key Patterns:**
- Fragment (`<>...</>`) - Groups multiple elements without extra DOM nodes
- Iteration (`.map()`) - Dynamically renders list of product cards
- Conditional rendering - Shows "No products" message when filter results are empty

### ProductCard Component (`src/components/ProductCard.jsx`)
**Responsibilities:**
- Displays individual product information (name, price, availability)
- Applies conditional styling based on stock status
- Provides remove button functionality

**Key Features:**
- **Conditional CSS Classes** - Applies `outOfStockClass` to out-of-stock products
- **Stock Status Styling** - Green text for "In Stock", red text for "Out of Stock"
- **Remove Functionality** - Button click removes product from dashboard
- **CSS Module Integration** - Scoped styles prevent class conflicts

## Setup & Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Steps

1. **Navigate to the project directory:**
   ```bash
   cd lab-product-dashboard-vite
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   - Opens at `http://localhost:5173/`
   - Hot reloads on file changes

4. **Build for production:**
   ```bash
   npm run build
   ```
   - Creates optimized build in `dist/` folder

5. **Preview production build:**
   ```bash
   npm run preview
   ```

## Running Tests

The project includes comprehensive tests using Vitest and React Testing Library.

### Run tests once:
```bash
npm test
```

### Run tests in watch mode:
```bash
npm test:watch
```

### Test Coverage

The test suite verifies:
1. ✅ **Title Rendering** - Dashboard title displays correctly
2. ✅ **Product Display** - All products render initially
3. ✅ **Conditional Styling** - Out-of-stock products have special styling (outOfStockClass)
4. ✅ **Product Removal** - Remove button correctly deletes products
5. ✅ **Empty State** - Message displays when no products match filter
6. ✅ **Filter Functionality** - Products correctly filter by availability

## Code Examples & Key Concepts

### 1. Iteration with `.map()` - ProductList.jsx
```jsx
{products.map((product) => (
  <ProductCard
    key={product.id}
    product={product}
    onRemove={() => onRemove(product.id)}
  />
))}
```
- Maps array of products to ProductCard components
- Each item needs a unique `key` prop for React's reconciliation
- Passes product data and callback functions as props

### 2. Conditional Rendering - ProductList.jsx
```jsx
{products.length > 0 ? (
  <Stack spacing={2}>
    {/* Product cards here */}
  </Stack>
) : (
  <Typography>No products available for this filter.</Typography>
)}
```
- Shows product list if products exist
- Shows empty state message if no products match filter

### 3. Conditional Styling - ProductCard.jsx
```jsx
const classNames = [
  styles.productCard,
  !product.inStock ? styles.outOfStockClass : '',
].filter(Boolean).join(' ');
```
- Dynamically applies CSS Module classes
- Out-of-stock products get special styling (light red background)
- Filter removes empty strings, join creates single className string

### 4. State Management - App.jsx
```jsx
const [products, setProducts] = useState(initialProducts);
const [filter, setFilter] = useState('all');

const filteredProducts = products.filter((product) => {
  if (filter === 'inStock') return product.inStock;
  if (filter === 'outOfStock') return !product.inStock;
  return true;
});
```
- Manages product list and current filter
- Computed derived state (`filteredProducts`) from base state
- Efficient filtering without mutating original state

## Styling Details

### CSS Modules - ProductCard.module.css

**Base Card Styling:**
```css
.productCard {
  padding: 16px;
  border: 1px solid #d1d5db;
  background-color: #ffffff;
  border-radius: 12px;
}
```

**Out-of-Stock Styling:**
```css
.outOfStockClass {
  background-color: #fff1f0;  /* Light red background */
  border-color: #ff8a80;       /* Red border */
}
```

**Stock Status Text Colors:**
- **In Stock** - `color: #2e7d32` (green)
- **Out of Stock** - `color: #d32f2f` (red)

**Remove Button:**
- Blue background with white text
- Hover effect darkens background
- Cursor changes to pointer on hover

## Material UI Components Used

| Component | Purpose | Props |
|-----------|---------|-------|
| `Box` | Container with responsive spacing | `sx`, `p` (padding), `mx` (margin-x) |
| `Typography` | Text with semantic HTML | `variant`, `component`, `gutterBottom` |
| `Stack` | Flexbox layout helper | `direction`, `spacing` |
| `Button` | Interactive buttons | `variant`, `onClick` |

## Features Implemented

✅ **Product Rendering**
- Displays product name, price, and availability status
- Renders products dynamically from data array

✅ **Filtering System**
- "All" button shows all products
- "In Stock" button filters to available products only
- "Out of Stock" button filters to unavailable products only
- Active filter button is highlighted

✅ **Conditional Styling**
- In-stock products: normal white background
- Out-of-stock products: light red background with red border
- Stock status text: green for in-stock, red for out-of-stock

✅ **Product Removal**
- Each product card has a Remove button
- Clicking Remove deletes the product from the dashboard
- Removed products no longer appear in any filter view

✅ **Empty State Handling**
- When no products match the filter, displays "No products available" message
- Message appears in gray text for subtle notification

✅ **Responsive Design**
- Layout centers content with max-width
- Cards stack vertically with consistent spacing
- Works on different screen sizes

## Common Testing Patterns

### Render Component
```javascript
render(<App />)
```
Renders component in virtual DOM for testing

### Query Elements
```javascript
screen.getByText(/Product Dashboard/i)  // Finds by text
screen.queryAllByText(/Remove/i)        // Finds multiple elements
screen.getByText('Phone').closest('div')// Gets parent element
```

### Simulate Events
```javascript
fireEvent.click(removeButton)  // Simulates button click
```

### Assertions
```javascript
expect(element).toBeInTheDocument()
expect(element).toHaveClass('className')
expect(buttons.length).toBeGreaterThan(0)
```

## Version Control

### Git Workflow

Initialize repository (if needed):
```bash
git init
git remote add origin <your-github-repo-url>
```

Save changes:
```bash
git add .
git commit -m "Add comprehensive comments and improve documentation"
git push origin main
```

Check branch:
```bash
git branch
```

## Resources

### Documentation
- [React Documentation](https://react.dev) - React fundamentals
- [Material UI Documentation](https://mui.com) - MUI components and styling
- [CSS Modules Documentation](https://github.com/css-modules/css-modules) - CSS Modules guide
- [Vite Documentation](https://vitejs.dev) - Build tool documentation

### Testing
- [Vitest Documentation](https://vitest.dev) - Test framework
- [React Testing Library](https://testing-library.com) - Component testing utilities

## Troubleshooting

### Tests failing?
1. Ensure all dependencies are installed: `npm install`
2. Check that components have correct prop names
3. Verify CSS Module imports path is correct
4. Run `npm test:watch` to see detailed error messages

### Styling not applying?
1. Check CSS Module import statement in component
2. Verify class name is spelled correctly (case-sensitive)
3. Ensure CSS file is in the correct location
4. CSS Modules are scoped, so global classes need `:global()` wrapper

### Products not displaying?
1. Verify product objects have required properties (id, name, price, inStock)
2. Check that ProductList receives `products` prop
3. Ensure key props are unique in mapped lists

## Grading Criteria

This lab is graded on the following criteria:

**Functionality** ✅
- Product cards render with correct information
- Filtering works for all three states (All, In Stock, Out of Stock)
- Remove buttons work correctly
- Empty state displays when appropriate
- Conditional styling applies to out-of-stock products

**Project Structure** ✅
- Components are properly organized in src/components
- CSS Modules are used for styling
- Props are correctly passed between components
- State management is efficient and correct

**Testing** ✅
- All tests pass without errors
- Component renders correctly
- Conditional rendering works as expected
- Event handlers function properly
- Edge cases are handled (empty list, etc.)

## Next Steps

To extend this dashboard, consider:
1. Adding search functionality to filter by product name
2. Implementing sorting (by name, price, stock status)
3. Adding a form to add new products
4. Fetching products from an API instead of hardcoded data
5. Implementing shopping cart functionality
6. Adding product quantity selection
