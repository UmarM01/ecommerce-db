import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice, getStarRating } from '../utils/helpers';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="card h-100 border-0 shadow-sm">
      <div className="ratio ratio-4x3 bg-body-tertiary rounded-top">
        <img
          src={product.image}
          className="card-img-top object-fit-cover"
          alt={product.name}
        />
      </div>
      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start gap-2 mb-2">
          <h5 className="card-title mb-0">{product.name}</h5>
          <span className="badge text-bg-light">{product.category}</span>
        </div>
        <p className="card-text text-secondary small flex-grow-1">{product.description}</p>
        <p className="mb-2" aria-label={`${product.rating} out of 5 stars`}>
          <span className="text-warning">{getStarRating(product.rating)}</span>
          <span className="text-secondary small ms-2">{product.rating.toFixed(1)}</span>
        </p>
        <p className="fw-bold fs-5 text-primary mb-3">{formatPrice(product.price)}</p>
        <button
          className="btn btn-primary mt-auto"
          onClick={() => onAddToCart(product)}
          disabled={!product.inStock}
        >
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  onAddToCart: PropTypes.func.isRequired
};

export default ProductCard;
