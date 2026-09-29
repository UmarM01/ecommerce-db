// DAY 6: Lists with Keys and Parent-Child Communication

import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

const ProductList = ({ products, onAddToCart }) => {
  return (
    <div className="product-list-container">
      <p className="text-secondary small mb-3">Showing {products.length} products</p>

      {products.length === 0 ? (
        <div className="alert alert-light border empty-state">
          <p>No products found in this category.</p>
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-3">
          {/* DAY 6: Unique keys using product ID */}
          {products.map((product) => (
            <div className="col" key={product.id}>
              <ProductCard product={product} onAddToCart={onAddToCart} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  onAddToCart: PropTypes.func.isRequired
};

export default ProductList;
