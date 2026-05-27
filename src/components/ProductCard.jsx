/**
 * ProductCard Component
 * 
 * Purpose: Render a single product card with:
 * - Product name, price, and availability status
 * - Conditional styling for out-of-stock products (using CSS Modules)
 * - Remove button to delete the product from the dashboard
 */

import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product, onRemove }) => {
  /**
   * Build className array for conditional styling
   * - Always apply base productCard style
   * - Apply outOfStockClass style if product is not in stock
   * - Also apply global outOfStockClass for testing purposes
   * - Filter out empty strings and join with spaces
   */
  const classNames = [
    styles.productCard,  // Base card styling
    !product.inStock ? styles.outOfStockClass : '',  // CSS module class for out-of-stock
    !product.inStock ? 'outOfStockClass' : '',  // Global class for out-of-stock (for testing)
  ]
    .filter(Boolean)  // Remove empty strings
    .join(' ');  // Combine into single className string

  return (
    <div className={classNames}>
      {/* Product Name */}
      <h2>{product.name}</h2>
      
      {/* Product Price */}
      <p>Price: {product.price}</p>
      
      {/* Availability Status - Conditional styling based on stock status */}
      {/* Green text for in-stock, red text for out-of-stock */}
      <p className={product.inStock ? styles.inStock : styles.outOfStock}>
        {product.inStock ? 'In Stock' : 'Out of Stock'}
      </p>
      
      {/* Remove Button - Removes product from dashboard when clicked */}
      <button type="button" className={styles.removeButton} onClick={onRemove}>
        Remove
      </button>
    </div>
  );
};

export default ProductCard;
