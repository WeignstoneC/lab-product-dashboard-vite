import React from 'react';
import ProductCard from './ProductCard';
import { Typography, Stack } from '@mui/material';

const ProductList = ({ products, onRemove }) => {
  return (
    <>
      {products.length > 0 ? (
        <Stack spacing={2}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onRemove={() => onRemove(product.id)}
            />
          ))}
        </Stack>
      ) : (
        <Typography variant="body1" color="text.secondary">
          No products available for this filter.
        </Typography>
      )}
    </>
  );
};

export default ProductList;
