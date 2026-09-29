import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../utils/helpers';

const CartItem = ({ item, onQuantityChange, onRemoveItem }) => {
  return (
    <div className="list-group-item">
      <div className="row align-items-center g-2">
        <div className="col-md">
          <h5 className="mb-1">{item.name}</h5>
          <span>{formatPrice(item.price)}</span>
        </div>
        <div className="col-auto">
          <label className="form-label mb-0 me-2" htmlFor={`quantity-${item.id}`}>
            Quantity
          </label>
          <input
            id={`quantity-${item.id}`}
            className="form-control w-auto d-inline-block"
            type="number"
            min="1"
            value={item.quantity}
            onChange={(event) => onQuantityChange(item.id, Number(event.target.value))}
          />
        </div>
        <div className="col-auto">
          <button
            className="btn btn-outline-danger"
            onClick={() => onRemoveItem(item.id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
  onQuantityChange: PropTypes.func.isRequired,
  onRemoveItem: PropTypes.func.isRequired
};

export default CartItem;
