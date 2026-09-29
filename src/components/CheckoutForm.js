import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CheckoutForm = ({ onPlaceOrder }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onPlaceOrder({ name, email, address });
  };

  return (
    <form className="container py-3" onSubmit={handleSubmit}>
      <h2 className="mb-3">Checkout</h2>
      <div className="mb-3">
        <label className="form-label" htmlFor="checkout-name">Name</label>
        <input
          id="checkout-name"
          className="form-control"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="checkout-email">Email</label>
        <input
          id="checkout-email"
          className="form-control"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="checkout-address">Address</label>
        <textarea
          id="checkout-address"
          className="form-control"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
          required
        />
      </div>
      <button className="btn btn-success" type="submit">Place Order</button>
    </form>
  );
};

CheckoutForm.propTypes = {
  onPlaceOrder: PropTypes.func.isRequired
};

export default CheckoutForm;
