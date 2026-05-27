/**
 * App Component - Main Product Dashboard Container
 * 
 * This is the root component of the product dashboard. It manages:
 * - The list of all products
 * - Filtering logic (all, in-stock, out-of-stock)
 * - Product removal functionality
 * - Filter button UI
 */

import React, { useState } from 'react';
import ProductList from './components/ProductList';
import { Box, Button, Stack, Typography } from '@mui/material';

// Initial sample products with id, name, price, and availability status
const initialProducts = [
  { id: 1, name: 'Laptop', price: '$999', inStock: true },
  { id: 2, name: 'Phone', price: '$699', inStock: false },
  { id: 3, name: 'Tablet', price: '$499', inStock: true },
];

const App = () => {
  // State to manage the list of products
  const [products, setProducts] = useState(initialProducts);
  
  // State to manage the current filter: 'all', 'inStock', or 'outOfStock'
  const [filter, setFilter] = useState('all');

  /**
   * Filter products based on the selected filter
   * - 'all': displays all products
   * - 'inStock': displays only products where inStock === true
   * - 'outOfStock': displays only products where inStock === false
   */
  const filteredProducts = products.filter((product) => {
    if (filter === 'inStock') return product.inStock;
    if (filter === 'outOfStock') return !product.inStock;
    return true; // Show all products for 'all' filter
  });

  /**
   * Remove a product from the dashboard by its id
   * This handler is passed to ProductList and then to ProductCard
   * @param {number} id - The id of the product to remove
   */
  const handleRemove = (id) => {
    setProducts((current) => current.filter((product) => product.id !== id));
  };

  return (
    <Box sx={{ p: 4, maxWidth: 960, mx: 'auto' }}>
      {/* Dashboard Title */}
      <Typography variant="h3" component="h1" gutterBottom>
        Product Dashboard
      </Typography>

      {/* Filter Buttons - Allow users to filter products by availability */}
      <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
        {/* All Products Filter Button */}
        <Button
          variant={filter === 'all' ? 'contained' : 'outlined'}
          onClick={() => setFilter('all')}
        >
          All
        </Button>
        
        {/* In Stock Filter Button */}
        <Button
          variant={filter === 'inStock' ? 'contained' : 'outlined'}
          onClick={() => setFilter('inStock')}
        >
          In Stock
        </Button>
        
        {/* Out of Stock Filter Button */}
        <Button
          variant={filter === 'outOfStock' ? 'contained' : 'outlined'}
          onClick={() => setFilter('outOfStock')}
        >
          Out of Stock
        </Button>
      </Stack>

      {/* Product List - Renders filtered products */}
      <ProductList products={filteredProducts} onRemove={handleRemove} />
    </Box>
  );
};

export default App;
