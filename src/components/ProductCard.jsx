import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product, onRemove }) => {
  const classNames = [
    styles.productCard,
    !product.inStock ? styles.outOfStockClass : '',
    !product.inStock ? 'outOfStockClass' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classNames}>
      <h2>{product.name}</h2>
      <p>Price: {product.price}</p>
      <p className={product.inStock ? styles.inStock : styles.outOfStock}>
        {product.inStock ? 'In Stock' : 'Out of Stock'}
      </p>
      <button type="button" className={styles.removeButton} onClick={onRemove}>
        Remove
      </button>
    </div>
  );
};

export default ProductCard;
