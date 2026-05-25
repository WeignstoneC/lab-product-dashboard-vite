import React, { useState } from 'react';
import ProductList from './components/ProductList';
import { Box, Button, Stack, Typography } from '@mui/material';

const initialProducts = [
  { id: 1, name: 'Laptop', price: '$999', inStock: true },
  { id: 2, name: 'Phone', price: '$699', inStock: false },
  { id: 3, name: 'Tablet', price: '$499', inStock: true },
];

const App = () => {
  const [products, setProducts] = useState(initialProducts);
  const [filter, setFilter] = useState('all');

  const filteredProducts = products.filter((product) => {
    if (filter === 'inStock') return product.inStock;
    if (filter === 'outOfStock') return !product.inStock;
    return true;
  });

  const handleRemove = (id) => {
    setProducts((current) => current.filter((product) => product.id !== id));
  };

  return (
    <Box sx={{ p: 4, maxWidth: 960, mx: 'auto' }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Product Dashboard
      </Typography>

      <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
        <Button
          variant={filter === 'all' ? 'contained' : 'outlined'}
          onClick={() => setFilter('all')}
        >
          All
        </Button>
        <Button
          variant={filter === 'inStock' ? 'contained' : 'outlined'}
          onClick={() => setFilter('inStock')}
        >
          In Stock
        </Button>
        <Button
          variant={filter === 'outOfStock' ? 'contained' : 'outlined'}
          onClick={() => setFilter('outOfStock')}
        >
          Out of Stock
        </Button>
      </Stack>

      <ProductList products={filteredProducts} onRemove={handleRemove} />
    </Box>
  );
};

export default App;
