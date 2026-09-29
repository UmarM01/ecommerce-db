import React from 'react';
import PropTypes from 'prop-types';
import ProductList from '../components/ProductList';

const Products = ({ products, onAddToCart, loading, error }) => {
  return (
    <div className="container py-4">
      <h2 className="mb-3">Products</h2>
      {loading && <p>Loading products...</p>}
      {error && <div className="alert alert-danger" role="alert">{error}</div>}
      {!loading && !error && (
        <ProductList products={products} onAddToCart={onAddToCart} />
      )}
    </div>
  );
};

Products.propTypes = {
  products: PropTypes.array.isRequired,
  onAddToCart: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.string
};

Products.defaultProps = {
  loading: false,
  error: ''
};

export default Products;
