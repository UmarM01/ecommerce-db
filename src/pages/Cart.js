import React from 'react';
import PropTypes from 'prop-types';
import Cart from '../components/Cart';

const CartPage = ({ items, onQuantityChange, onRemoveItem, onCheckout }) => {
  return (
    <div className="container py-4">
      <Cart
        items={items}
        onQuantityChange={onQuantityChange}
        onRemoveItem={onRemoveItem}
        onCheckout={onCheckout}
      />
    </div>
  );
};

CartPage.propTypes = {
  items: PropTypes.array.isRequired,
  onQuantityChange: PropTypes.func.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
  onCheckout: PropTypes.func.isRequired
};

export default CartPage;
