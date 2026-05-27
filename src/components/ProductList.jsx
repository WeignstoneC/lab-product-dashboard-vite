/**
 * ProductList Component
 * 
 * Purpose: Renders a list of ProductCard components
 * - Uses iteration (map) to dynamically render product cards
 * - Uses conditional rendering to display a message when no products match the filter
 * - Uses fragments (<></>) to group elements without adding unnecessary DOM nodes
 */

import React from 'react';
import ProductCard from './ProductCard';
import { Typography, Stack } from '@mui/material';

const ProductList = ({ products, onRemove }) => {
  return (
    <>
      {/* Conditional rendering: Show products if available, otherwise show "no products" message */}
      {products.length > 0 ? (
        // Stack component provides spacing between product cards
        <Stack spacing={2}>
          {/* Map over filtered products array and render a ProductCard for each */}
          {products.map((product) => (
            <ProductCard
              key={product.id}  // Unique key for React list rendering optimization
              product={product}  // Pass product data to card
              onRemove={() => onRemove(product.id)}  // Pass callback for remove button
            />
          ))}
        </Stack>
      ) : (
        // Display message when no products match the current filter
        <Typography variant="body1" color="text.secondary">
          No products available for this filter.
        </Typography>
      )}
    </>
  );
};

export default ProductList;
