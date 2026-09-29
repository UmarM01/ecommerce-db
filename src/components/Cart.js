import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';
import { calculateTotal, formatPrice } from '../utils/helpers';

const Cart = ({ items, onQuantityChange, onRemoveItem, onCheckout }) => {
  if (items.length === 0) {
    return (
      <div className="alert alert-info" role="status">
        Your cart is empty.
      </div>
    );
  }

  return (
    <div className="container py-3">
      <h2 className="mb-3">Shopping Cart</h2>
      <div className="list-group mb-3">
        {items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onQuantityChange={onQuantityChange}
            onRemoveItem={onRemoveItem}
          />
        ))}
      </div>

      <div className="d-flex justify-content-between align-items-center">
        <h4 className="mb-0">Total: {formatPrice(calculateTotal(items))}</h4>
        <button className="btn btn-primary" onClick={onCheckout}>
          Continue to Checkout
        </button>
      </div>
    </div>
  );
};

Cart.propTypes = {
  items: PropTypes.array.isRequired,
  onQuantityChange: PropTypes.func.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
  onCheckout: PropTypes.func.isRequired
};

export default Cart;
