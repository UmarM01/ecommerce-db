import React from 'react';
import PropTypes from 'prop-types';
import CheckoutForm from '../components/CheckoutForm';
import { calculateTotal, formatPrice } from '../utils/helpers';

const Checkout = ({ items, onPlaceOrder, orderMessage, error }) => {
  if (orderMessage) {
    return (
      <div className="container py-4">
        <div className="alert alert-success" role="status">{orderMessage}</div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="container py-4">
        <div className="alert alert-info" role="status">Your cart is empty.</div>
      </div>
    );
  }

  return (
    <div className="container py-4">
      {error && <div className="alert alert-danger" role="alert">{error}</div>}
      <div className="row">
        <div className="col-lg-8">
          <CheckoutForm onPlaceOrder={onPlaceOrder} />
        </div>
        <div className="col-lg-4">
          <div className="card mt-3">
            <div className="card-body">
              <h3 className="h5">Order Summary</h3>
              <p className="mb-0">Total: {formatPrice(calculateTotal(items))}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Checkout.propTypes = {
  items: PropTypes.array.isRequired,
  onPlaceOrder: PropTypes.func.isRequired,
  orderMessage: PropTypes.string,
  error: PropTypes.string
};

Checkout.defaultProps = {
  orderMessage: '',
  error: ''
};

export default Checkout;
